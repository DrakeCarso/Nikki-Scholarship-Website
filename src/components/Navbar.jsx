import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stripeDonateUrl = "https://buy.stripe.com/5kQcN71pJdev338fNP2Ji00";
  const galleryUrl = "https://northcoastcaninecontent.pixieset.com/nccs5k/?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* LEFT — LOGO */}
        <div className="nav-logo">
          <Link to="/">NCCS</Link>
        </div>

        {/* RIGHT — DESKTOP LINKS */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a 
            href={galleryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gallery
          </a>

          {/* CHANGE HERE */}
          <a 
            href={stripeDonateUrl} 
            className="donate-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>

        {/* RIGHT — MOBILE HAMBURGER */}
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>

          {/* CHANGE HERE TOO */}
          <a
            href={stripeDonateUrl}
            className="donate-btn mobile-donate"
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>
      )}
    </nav>
  );
}
