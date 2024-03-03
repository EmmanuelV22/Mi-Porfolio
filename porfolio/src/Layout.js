import React, { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import manu from "./media/manu.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import fondo from "../src/media/humo.mp4";

const Layout = () => {
  const basename = process.env.BASENAME || "";
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
      <video autoPlay loop muted ref={videoRef}>
        <source src={fondo} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <Navbar />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FloatingWhatsApp
          phoneNumber="+59895695958"
          accountName="Emmanuel"
          chatMessage="Bienvenido a mi porfolio, puedes contactarme aqui"
          placeholder="Envia tu mensaje"
          messageDelay={0}
          statusMessage="Full stack web developer"
          buttonStyle={{ position: "fixed", bottom: "1rem", right: "20px" }}
          avatar={manu}
          style={{ height: "auto", width: "auto" }}
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Layout;
