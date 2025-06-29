import React, { useState } from "react";
import { Global, css } from "@emotion/react";
import qrCode from "../assets/QR_code/metamask_rich_wallet.png";

export default function Donate() {
  // Inside your Donate component:
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0xD2F703236A1334C554d9C76E2E4DD5Fa0ce8B23a");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

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
        `}
      />

      <h1 style={headingStyle}>Support the Journey</h1>

      <div style={cardStyle}>
        <p style={textStyle}>
          Choose your preferred platform to fuel this ridiculous experiment.
          Every dollar gets me closer to proving whether pure audacity can raise
          $10M.
        </p>

        <div style={platformsContainer}>
          <a
            href="https://coff.ee/richardr05"
            target="_blank"
            rel="noopener noreferrer"
            style={platformButton}
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy Me a Coffee"
              style={{ ...platformIcon, filter: "none" }}
            />
            <span>Buy Me a Coffee</span>
            <div style={hoverEffect}></div>
          </a>

          <a
            href="https://ko-fi.com/richardr05"
            target="_blank"
            rel="noopener noreferrer"
            style={platformButton}
          >
            <img
              src="https://storage.ko-fi.com/cdn/cup-border.png"
              alt="Ko-fi"
              style={{ ...platformIcon, filter: "none" }}
            />
            <span>Ko-fi</span>
            <div style={hoverEffect}></div>
          </a>

          <a
            href="https://www.paypal.com/donate/?hosted_button_id=NAXH9CBT3N6MJ"
            target="_blank"
            rel="noopener noreferrer"
            style={platformButton}
          >
            <img
              src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
              alt="PayPal"
              style={{ ...platformIcon, filter: "none" }}
            />
            <span>PayPal</span>
            <div style={hoverEffect}></div>
          </a>

          <div style={cryptoBox}>
            <h3 style={{ marginBottom: "10px" }}>Crypto Donations</h3>
            <p style={{ fontSize: "0.95rem", marginBottom: "15px" }}>
              Send ETH, USDC, USDT, MATIC, BNB, BUSD to this address:
            </p>

            <img src={qrCode} alt="Crypto QR Code" style={qrCodeStyle} />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            ></div>
            <code style={walletAddressStyle}>
              0xD2F703236A1334C554d9C76E2E4DD5Fa0ce8B23a
            </code>
            <button
              onClick={handleCopy}
              style={
                copied
                  ? { ...copyButtonStyle, ...copiedButtonStyle }
                  : copyButtonStyle
              }
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <p
          style={{
            ...textStyle,
            marginTop: "30px",
            fontSize: "0.9rem",
            opacity: 0.8,
          }}
        >
          (Yes, this is really the whole premise. No, I'm not kidding.)
        </p>
      </div>
    </div>
  );
}

// Styles
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
  ":hover": {
    backgroundColor: "rgba(50, 50, 90, 0.6)",
  },
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
  ":hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    "& div": {
      transform: "translateX(0)",
    },
  },
};

const platformIcon = {
  width: "30px",
  height: "30px",
  objectFit: "contain",
  filter: "brightness(0) invert(1)",
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

const cryptoBox = {
  backgroundColor: "rgba(40, 40, 80, 0.5)",
  borderRadius: "12px",
  padding: "25px",
  marginTop: "30px",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "white",

  "@media (max-width: 400px)": {
    padding: "15px",
  },
};

const qrCodeStyle = {
  margin: "0 auto 20px", // center horizontally + bottom space
  display: "block",
  borderRadius: "8px",
  width: "150px",
  height: "150px",
  maxWidth: "100%",
  // maxWidth: '80vw', // responsive for mobile, max 80% viewport width
  objectFit: "contain",

  // Responsive adjustments for small screens
  "@media (max-width: 400px)": {
    width: "120px",
    height: "120px",
  },

  "@media (max-width: 320px)": {
    width: "100px",
    height: "100px",
  },
};

const walletAddressStyle = {
  display: "block",
  margin: "0 auto",
  color: "#0ff",
  fontWeight: "600",
  fontSize: "1rem",
  wordBreak: "break-word", // wrap if needed
  userSelect: "all", // easy to select/copy on desktop
  maxWidth: "90%", // limits width on small screens
  overflowWrap: "break-word",

  "@media (max-width: 320px)": {
    fontSize: "0.85rem",
  },
};

const copyButtonStyle = {
  background: "rgba(0, 255, 255, 0.1)",
  color: "#0ff",
  border: "1px solid #0ff",
  borderRadius: "4px",
  padding: "8px 15px",
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "all 0.3s ease",
  ":hover": {
    background: "rgba(0, 255, 255, 0.2)",
    transform: "translateY(-1px)",
  },
  ":active": {
    transform: "translateY(0)",
  },
  "@media (max-width: 400px)": {
    padding: "6px 12px",
    fontSize: "0.85rem",
  },
};

const copiedButtonStyle = {
  background: "rgba(0, 255, 0, 0.1)",
  color: "#0f0",
  border: "1px solid #0f0",
};
