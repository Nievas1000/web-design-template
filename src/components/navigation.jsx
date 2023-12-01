import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Navigation = (props) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Función para cambiar el estado del scroll y manejar el color del navbar
    function handleScroll() {
      if (window.scrollY > 50) {
        if (!scrolled) {
          setScrolled(true);
        }
      } else {
        if (scrolled) {
          setScrolled(false);
        }
      }
    }

    // Agregamos el listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); // Agregamos scrolled al array de dependencias
  
  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Nevvo
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
