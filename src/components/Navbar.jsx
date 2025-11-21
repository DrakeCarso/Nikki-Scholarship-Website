import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-logo">
          <Link to="/">Carso Scholarship</Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/donate" className="donate-btn">Donate</Link>
        </div>

      </div>
    </nav>
  );
}