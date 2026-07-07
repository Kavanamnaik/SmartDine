import "./Navbar.css";
import {
  Bell,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <>
      <nav className="navbar">

        <div className="logo">

          <div className="logo-icon">
            🍽
          </div>

          <h2>
            Smart<span>Dine</span>
          </h2>

        </div>

        <ul className="nav-links">

          <li className="active">Home</li>
          <li>Restaurants</li>
          <li>Menu</li>
          <li>Bookings</li>
          <li>About</li>

        </ul>

        <div className="nav-icons">

          <button className="icon-btn">
            <Bell size={20}/>
          </button>

          <button
            className="icon-btn"
            onClick={toggleTheme}
          >
            {dark ? <Sun size={20}/> : <Moon size={20}/>}
          </button>

          <button
            className="icon-btn mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>

        </div>

      </nav>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <a href="#">Home</a>
        <a href="#">Restaurants</a>
        <a href="#">Menu</a>
        <a href="#">Bookings</a>
        <a href="#">About</a>

      </div>
    </>
  );
}

export default Navbar;