import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import NikkiRunning from "../assets/NikkiRunning.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false); // NEW
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false); // NEW

  const stripeDonateUrl = "https://buy.stripe.com/5kQcN71pJdev338fNP2Ji00";
  
  const gallery2025 =
    "https://flic.kr/s/aHBqjCCmET";

  const canicrossPhotos =
    "https://northcoastcaninecontent.pixieset.com/";

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileGalleryOpen(false);
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

          {/* GALLERY DROPDOWN */}
          <div className="dropdown">
  <button 
    className="dropdown-trigger"
    onClick={() => setGalleryOpen(!galleryOpen)}
  >
    Gallery ▾
  </button>

  {galleryOpen && (
    <div 
      className="dropdown-menu"
      onMouseLeave={() => setGalleryOpen(false)}
    >
      <a href={gallery2025} target="_blank" rel="noopener noreferrer">NCCS 2025</a>
      <a href={canicrossPhotos} target="_blank" rel="noopener noreferrer">Canicross Photos</a>
    </div>
  )}
</div>


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

        {/* MOBILE DROPDOWN */}
        <div className="mobile-dropdown">
          <button
            className="mobile-dropdown-trigger"
            onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
          >
            Gallery {mobileGalleryOpen ? "▴" : "▾"}
          </button>

          {mobileGalleryOpen && (
            <div className="mobile-dropdown-menu">
              <a href={gallery2025} target="_blank" rel="noopener noreferrer">NCCS 2025</a>
              <a href={canicrossPhotos} target="_blank" rel="noopener noreferrer">Canicross Photos</a>
            </div>
          )}
        </div>

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
