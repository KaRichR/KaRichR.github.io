import React from "react";
import ProofEntry from "../components/ProofEntry";
import proofData from "../data/proofData";
import { Global, css } from "@emotion/react";

export default function Proof() {
  const totalRaised = proofData.reduce((sum, entry) => sum + entry.amount, 0);

  // const isMobile = window.innerWidth <= 768;

  return (
    <div style={containerStyle}>
      <Global
        styles={css`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Add these global styles to prevent overflow */
          html,
          body {
            overflow-x: hidden;
            width: 100%;
          }
        `}
      />

      <h1 style={headingStyle}>Proof of Donations</h1>

      <div style={summaryCard}>
        <h2 style={totalRaisedStyle}>${totalRaised.toLocaleString()}</h2>
        <p style={subtitleStyle}>Total funds raised across all platforms</p>
      </div>

      <div style={instructionsCard}>
        <h3 style={instructionsTitle}>How This Works</h3>
        <ul style={instructionsList}>
          <li>
            📅 <strong>Daily updates</strong> with combined totals
          </li>
          <li>
            📸 <strong>Verified screenshots</strong> from each platform
          </li>
          <li>
            🔄 <strong>Newest entries</strong> appear at the top
          </li>
          <li>
            🧮 <strong>Automatic total</strong> calculation
          </li>
        </ul>
      </div>

      <div style={updatesContainer}>
        {proofData.map((entry, index) => (
          <div key={index} style={{ animation: "fadeIn 0.5s ease-out" }}>
            <ProofEntry
              date={entry.date}
              platforms={entry.platforms}
              amount={entry.amount}
              note={entry.note}
              imageUrls={entry.imageUrls}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "30px",
  backgroundColor: "rgba(30, 30, 60, 0.7)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  width: "calc(100% - 40px)", // Always account for padding
  boxSizing: "border-box",

  "@media (max-width: 768px)": {
    padding: "20px",
    width: "calc(100% - 20px)",
    margin: "20px auto",
  },

  "@media (max-width: 350px)": {
    padding: "15px 10px",
    width: "calc(100% - 10px)",
    borderRadius: "12px",
  },
};

const headingStyle = {
  fontSize: "2.5rem",
  background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "20px",
  fontWeight: "800",
  textAlign: "center",
};

const summaryCard = {
  backgroundColor: "rgba(40, 40, 80, 0.4)",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "30px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  textAlign: "center",
};

const totalRaisedStyle = {
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "10px 0",
  color: "#4ecdc4",
  textShadow: "0 2px 10px rgba(78, 205, 196, 0.3)",
};

const subtitleStyle = {
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "1rem",
  margin: 0,
};

const instructionsCard = {
  backgroundColor: "rgba(60, 60, 100, 0.4)",
  borderRadius: "12px",
  padding: "25px",
  marginBottom: "30px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const instructionsTitle = {
  fontSize: "1.3rem",
  color: "#8E54E9",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const instructionsList = {
  paddingLeft: "0",
  listStyle: "none",
  color: "rgba(255, 255, 255, 0.9)",
  lineHeight: "1.8",
  "& li": {
    marginBottom: "10px",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    paddingLeft: "0",
  },
};

const updatesContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};
