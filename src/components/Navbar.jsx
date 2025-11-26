import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import NikkiRunning from "../assets/NikkiRunning.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const stripeDonateUrl = "https://buy.stripe.com/5kQcN71pJdev338fNP2Ji00";
  const galleryUrl = "https://northcoastcaninecontent.pixieset.com/nccs5k/?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  const location = useLocation();

  // Detect scroll for shrink effect + glass blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/" className="logo-flex">
            <img src={NikkiRunning} alt="Logo" className="logo-img" />
            <span className="logo-text">NCCS</span>
          </Link>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            About
          </Link>

          <a
            href={galleryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gallery
          </a>

          <a
            href={stripeDonateUrl}
            className="donate-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>

        {/* BURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href={galleryUrl} target="_blank" rel="noopener noreferrer">
          Gallery
        </a>
        <a
          href={stripeDonateUrl}
          className="donate-btn mobile-donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
      </div>
    </nav>
  );
}
