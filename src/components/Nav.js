import React from "react";

export default function Nav() {
  return (
      <nav className="nav-bar">
        <img className="logo" src="" alt="Taylor Maid Cleaning Logo" />
        <ul className="nav-links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
  );
}
