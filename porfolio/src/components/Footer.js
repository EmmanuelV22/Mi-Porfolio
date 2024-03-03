import React from "react";

const Footer = () => {
  const copyEmail = async () => {
    const email = "emmanuel.v18@hotmail.com";
    try {
      await navigator.clipboard.writeText(email);
      alert("Dirección de correo electrónico copiada al portapapeles");
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
      alert("Error al copiar al portapapeles");
    }
  };
  return (
    <div className="container text-center mb-4">
      <h2 id="contacto" className="mt-3 text-white">
        Contacto
      </h2>
      <p className="m-3 mx-auto">
        Puedes contactarme por los siguientes medios:
      </p>
      <div>
        <a className="to" href="https://github.com/EmmanuelV22">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
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
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>{" "}
        <a
          className="to px-4"
          href="https://www.linkedin.com/in/emmanuel-vargas-girino-5656bb289/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
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
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>{" "}
        <a className="to" onClick={copyEmail}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
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
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </a>
      </div>
      <div>
        <span className="px-1">Github</span>{" "}
        <span className="px-2">Linkedin</span>{" "}
        <span className="px-1">E-Mail</span>
      </div>
      <p className="pt-2">
        Mi certificado Full-Stack :{" "}
        <a
          className="text-white text-decoration-none"
          href="https://certificate.4geeks.com/92fab77336e9dc362c954228b83ea2dcf25c74e1"
        >
          Certificado
        </a>
      </p>
      <p style={{ fontSize: "1rem" }} className="mt-5 text-white">
        Emmanuel Vargas
      </p>
      <p style={{ fontSize: "1rem" }} className="mb-3 text-white">
        2024
      </p>
    </div>
  );
};

export default Footer;
