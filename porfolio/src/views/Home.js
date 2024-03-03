import React, { useRef, useEffect } from "react";
import clinic from "../media/clinic.mp4";
import vanguard from "../media/vanguard.mkv";

const Home = () => {
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
    <div className="container-fluid text-center my-4">
      <h1 className="pt-5">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-terminal"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 7l5 5l-5 5" />
          <path d="M12 19l7 0" />
        </svg>
        Bienvenidos a mi porfolio
      </h1>
      <div>
        <h2 id="sobre-mi" className="mt-3 text-white">
          Sobre mí
        </h2>
        <p className="text-start">
          Mi nombre es Emmanuel Vargas y soy un desarrollador web full stack de
          Uruguay. Resido en Montevideo y culminé con éxito el bootcamp de 18
          semanas de 4 Geeks Academy en agosto del año 2023. Soy una
          persona muy dedicada y apasionada por lo que hace, siempre buscando
          dar el máximo rendimiento en las tareas que realizo.
        </p>

        <p className="text-start">
          Cuento con conocimientos para el desarrollo de aplicaciones web con
          HTML5, estilos de CSS3, lenguaje Javascript + NodeJS, interfaces de
          usuario con librerías de React, creación, configuración y comunicación
          con APIs internas o externas, configuración de bases de datos SQL como
          Postgre, MySQL o Flask de Python.
        </p>

        <p className="text-start">
          Actualmente he realizado proyectos personales para seguir aprendiendo
          y mejorando las buenas prácticas que se usan en la actualidad, en apps
          como lo son un e-commerce o un sistema de gestión de turnos médicos,
          con complementos para métodos de pago como PayPal y seguridad
          informática para proteger la información del usuario con encriptación.
        </p>
      </div>
      <div>
        <h2 id="mis-proyectos" className="mt-3 mb-3 text-white">
          Mis proyectos
        </h2>
        <div>
          <h3 className="text-white mb-4">Clinic'app</h3>
          <video className="proyects" autoPlay loop muted ref={videoRef}>
            <source src={clinic} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <p className="text-start">
            Clinic'app es una app web desarrollada para facilitar las conexiones
            y gestión de información entre los pacientes y el personal médico de
            la clínica (tales como doctores, enfermeros y administrativos).
            Pudiendo visualizar datos como tratamientos, historia clínica y
            agenda, con un sistema de notificaciones vía e-mail para más
            comodidad, filtros de búsqueda y un chat de WhatsApp para una
            experiencia más personalizada. Su sistema se basa en el lenguaje
            JavaScript con HTML, CSS, React, una REST API basada en Node.js y
            una base de datos SQL de PostgreSQL.
          </p>
          <p className="pt-2">
            Demo:{" "}
            <a
              className="text-white text-decoration-none"
              href="https://medical-clinic-app.vercel.app/"
            >
              Ir a demo
            </a>
          </p>
          <p className="pt-2">
            Repositorios:{" "}
            <a
              className="text-white text-decoration-none"
              href="https://github.com/EmmanuelV22/medical-clinic-app-backend"
            >
              Ir a repositorio backend
            </a>
            {"     //    "}
            <a
              className="text-white text-decoration-none"
              href="https://github.com/EmmanuelV22/medical-clinic-app-front"
            >
              Ir a repositorio frontend
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-white mt-3 mb-4">Vanguard Vesture</h3>
          <video className="proyects" autoPlay loop muted ref={videoRef}>
            <source src={vanguard} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <p className="text-start">
            Vanguard Vesture es una aplicación web de e-commerce desarrollada
            para agilizar las actividades de compra y venta de indumentaria.
            Cuenta con un sistema de pago PayPal, filtros de búsqueda, una lista
            de favoritos y un chat web con respuesta inmediata para sus
            clientes. Desde el lado del vendedor, ofrece un sistema de
            publicación de artículos, capacidades de edición y gestión de la
            aplicación, incluyendo imágenes y procesamiento de pedidos. Utiliza
            las últimas tecnologías como JavaScript y React en el cliente, una
            API con Python Flask y una base de datos PostgreSQL para un
            desarrollo eficiente con espacio para implementaciones futuras que
            mejoren la experiencia.
          </p>
          <p className="pt-2">
            Demo:{" "}
            <a
              className="text-white text-decoration-none"
              href="https://vanguard-vesture.onrender.com/"
            >
              Ir a demo
            </a>
          </p>
          <p className="pt-2">
            Repositorio:{" "}
            <a
              className="text-white text-decoration-none"
              href="https://github.com/4GeeksAcademy/Final_Project_Vanguard_Vesture_pt18_E_L_J"
            >
              Ir a repositorio
            </a>
          </p>
        </div>
      </div>
      <div>
        <h2 id="tecnologias" className="my-3 text-white">
          Tecnologías y lenguajes que utilizo
        </h2>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-html5"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
          </svg>{" "}
          HTML
        </div>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-file-type-css"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
            <path d="M8 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
            <path d="M11 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
            <path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
          </svg>{" "}
          CSS
        </div>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-javascript"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M7.5 8h2v8l-2 -1" />
            <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
          </svg>{" "}
          JAVASCRIPT
        </div>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-react-native"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
            <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
            <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
            <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
            <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
            <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
            <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
          </svg>{" "}
          REACT
        </div>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-mysql"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
            <path d="M9 7h.01" />
          </svg>{" "}
          MYSQL
        </div>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-database"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
          </svg>{" "}
          POSTGRE
        </div>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-python"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
            <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
            <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
            <path d="M11 6l0 .01" />
            <path d="M13 18l0 .01" />
          </svg>{" "}
          PYTHON
        </div>
        <div className="my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-nodejs"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
            <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
          </svg>{" "}
          NODE
        </div>
      </div>
    </div>
  );
};

export default Home;
