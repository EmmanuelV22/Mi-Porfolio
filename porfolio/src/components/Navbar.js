import React, { useRef, useEffect } from "react";
import manu from "../media/manu.jpg";
import video from "../media/ink.mp4";

const Navbar = () => {
  const color = { color: "white" };
  const videoRef = useRef(null);
  const setPlaybackRate = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  };
  useEffect(() => {
    setPlaybackRate();
  }, []);
  return (
    <div>
      <nav className="navbar navbar-light bg-transparent fixed-top">
        <div className="container-fluid">
          <a
            href="#"
            cursor="pointer"
            className="text-white navbar-brand"
            onClick={window.scrollTo(0, 0)}
          >
            Emmanuel Vargas
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <div tabIndex="0" className="plusButton">
              <svg
                className="plusIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <g mask="url(#mask0_21_345)">
                  <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                </g>
              </svg>
            </div>
          </button>
          <div
            className="offcanvas bg-transparent bg-opacity-75 text-white offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <video autoPlay loop muted ref={videoRef}>
              <source src={video} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <div className="offcanvas-header">
              <h5
                style={color}
                className="offcanvas-title mx-auto"
                id="offcanvasNavbarLabel"
              >
                Desarrollador Web Full-Stack
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end text-center flex-grow-1 pe-3 ">
                <li className="nav-item d-flex justify-content-center">
                  <img
                    src={manu}
                    className="rounded-circle"
                    style={{
                      objectFit: "cover",
                      width: "8rem",
                      height: "8rem",
                      objectPosition: "top",
                    }}
                    alt=""
                    srcSet=""
                  />
                </li>
                <li className="nav-item pt-1 m-3">
                  <a
                    style={color}
                    className="active text-decoration-none"
                    aria-current="page"
                    href="#sobre-mi"
                  >
                    Sobre mí
                  </a>
                </li>
                <li className="nav-item m-3">
                  <a
                    style={color}
                    className="active text-decoration-none"
                    href="#mis-proyectos"
                  >
                    Mis proyectos
                  </a>
                </li>
                <li className="nav-item m-3">
                  <a
                    style={color}
                    className="active text-decoration-none"
                    href="#tecnologias"
                  >
                    Tecnologías
                  </a>
                </li>
                <li className="nav-item m-3">
                  <a
                    style={color}
                    className="active text-decoration-none"
                    href="#contacto"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
