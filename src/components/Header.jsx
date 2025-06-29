import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // use separate CSS

export default function Header() {
  return (
    <header>
      <h1>Ten Million Quest 🚀</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link> | <Link to="/donate">Donate</Link> |{" "}
        <Link to="/about">About</Link> | <Link to="/proof">Proof</Link> |{" "}
        <Link to="/socials">Socials</Link>
      </nav>
    </header>
  );
}
