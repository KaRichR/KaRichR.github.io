import React from "react";
import { Global, css } from "@emotion/react";

export default function Socials() {
  return (
    <div style={containerStyle}>
      <Global
        styles={css`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          a:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
        `}
      />

      <h1 style={headingStyle}>Follow the Journey</h1>

      <div style={cardStyle}>
        <p style={textStyle}>
          Connect with us on social media and stay updated on every step of this
          wild ride.
        </p>

        <div style={platformsContainer}>
          <a
            href="https://www.youtube.com/@TenMillionQuest"
            target="_blank"
            rel="noopener noreferrer"
            style={platformButton}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube"
              style={platformIcon}
            />
            <span>YouTube</span>
            <div style={hoverEffect}></div>
          </a>

          <a
            href="https://www.tiktok.com/@tenmillionquest"
            target="_blank"
            rel="noopener noreferrer"
            style={platformButton}
          >
            <img
              src="https://cdn.simpleicons.org/tiktok"
              alt="TikTok"
              style={{ ...platformIcon, filter: "none" }}
            />
            <span>TikTok</span>
            <div style={hoverEffect}></div>
          </a>

          <a
            href="https://www.instagram.com/tenmillionquest_/"
            target="_blank"
            rel="noopener noreferrer"
            style={platformButton}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              alt="Instagram"
              style={platformIcon}
            />
            <span>Instagram</span>
            <div style={hoverEffect}></div>
          </a>

          <a
            href="https://x.com/TenMillionQuest"
            target="_blank"
            rel="noopener noreferrer"
            style={platformButton}
          >
            <img
              src="https://cdn.simpleicons.org/x"
              alt="Twitter/X"
              style={{ ...platformIcon, filter: "none" }}
            />
            <span>Twitter / X</span>
            <div style={hoverEffect}></div>
          </a>
        </div>
      </div>
    </div>
  );
}

// Styles (same as Donate.jsx for consistency)
const containerStyle = {
  maxWidth: "800px",
  width: "calc(100% - 40px)",
  margin: "40px auto",
  padding: "30px",
  backgroundColor: "rgba(30, 30, 60, 0.7)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxSizing: "border-box",

  "@media (min-width: 801px)": {
    width: "auto",
  },

  "@media (max-width: 400px)": {
    width: "calc(100% - 20px)",
    padding: "20px 15px",
  },
};

const headingStyle = {
  fontSize: "2.5rem",
  background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "25px",
  fontWeight: "800",
  textAlign: "center",
};

const cardStyle = {
  backgroundColor: "rgba(40, 40, 80, 0.4)",
  borderRadius: "12px",
  padding: "30px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "all 0.3s ease",
};

const textStyle = {
  color: "rgba(255, 255, 255, 0.9)",
  lineHeight: "1.6",
  fontSize: "1.1rem",
  textAlign: "center",
  marginBottom: "30px",
};

const platformsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const platformButton = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  textDecoration: "none",
  borderRadius: "12px",
  padding: "18px 25px",
  fontWeight: "600",
  color: "white",
  backgroundColor: "rgba(60, 60, 100, 0.5)",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  cursor: "pointer",
};

const platformIcon = {
  width: "30px",
  height: "30px",
  objectFit: "contain",
  filter: "none",
  animation: "float 3s ease-in-out infinite",
};

const hoverEffect = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(90deg, rgba(142,84,233,0.3) 0%, rgba(71,118,230,0.3) 100%)",
  transform: "translateX(-100%)",
  transition: "transform 0.4s ease",
  zIndex: 0,
};
