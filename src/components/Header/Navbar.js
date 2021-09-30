import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { HashLink, NavHashLink } from "react-router-hash-link";

import { links } from "./links";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const changeNavbarBg = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      <nav className={navbar ? "navbar nav-active" : "navbar"}>
        <div className="nav-center">
          <div className="nav-header">
            <HashLink smooth to="/">
              <h2 className="logo">vinodKumar.</h2>
            </HashLink>
            <button
              className={`${
                showLinks ? "nav-toggle toggle-active" : "nav-toggle"
              }`}
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li
                    className="nav-link"
                    key={id}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <NavHashLink smooth activeClassName="active" to={url}>
                      {text}
                    </NavHashLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
