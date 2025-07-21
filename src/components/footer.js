"use client";
import React from "react";
import { PiInstagramLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
import { PiWhatsappLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer
      className="p-5 mt-5"
      style={{
        color: "#525250ff",
        padding: "20px ",
        textAlign: "center",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        className="instagram-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#080808ff",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 10px 20px #E1306C",
        }}
        onClick={() =>
          window.open("https://instagram.com/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#000000ff")}
      >
        <PiInstagramLogo size={32} />
      </span>
      <span
        className="facebook-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#000000ff",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 15px 20px#1877F3",
        }}
        onClick={() =>
          window.open("https://facebook.com/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#1877F3")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#0b0b0bff")}
      >
        <PiFacebookLogo size={32} />
      </span>
      <span
        className="telegram-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#000000ff",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 15px 20px #229ED9",
        }}
        onClick={() =>
          window.open("https://t.me/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#229ED9")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#090909ff")}
      >
        <PiTelegramLogo size={32} />
      </span>
      <span
        className="whatsapp-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#000000ff",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 10px 20px #25D366",
        }}
        onClick={() =>
          window.open("https://wa.me/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#080808ff")}
      >
        <PiWhatsappLogo size={30} />
      </span>
      <div className="headerfont">&copy; {new Date().getFullYear()} MOKİTA. Beni takip edebilirsiniz.</div>
    </footer>
  );
};

export default Footer;
