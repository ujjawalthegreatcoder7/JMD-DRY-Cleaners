import { useState } from "react";
import "./navbar.css";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import perfectlogo from "../assets/perfectlogo.png";
import { Link } from "react-router-dom";
// import { mainlogo } from "../assets/mainlogo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // close menu when clicking link
    const handleClose = () => setOpen(false);

    return (
        <nav className="navbar">

            {/* LOGO */}
            <div className="logo">
                <img className="logoim" src={perfectlogo} alt="logo" />
            </div>

            {/* HAMBURGER (RIGHT SIDE) */}
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <FaBars />
            </div>

            {/* NAV LINKS */}
            <div className="options" >
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li>
                    <Link to="/" onClick={handleClose}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleClose}>
                        About Us
                    </Link>
                </li>

                <li>
                    <Link to="/gallery" onClick={handleClose}>
                        Gallery
                    </Link>
                </li>

                <li>
                    <Link to="/reviews" onClick={handleClose}>
                        Reviews
                    </Link>
                </li>
            </ul>
</div>
            {/* WHATSAPP / CONTACT */}
            <a
                href="https://wa.me/919319354648"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
            >
                <span className="contact-text">Contact Us</span>
                <FaWhatsapp size={24} className="whatsapp-icon" />
            </a>

        </nav>
    );
}