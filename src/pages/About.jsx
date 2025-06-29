import React from "react";
import { Global, css } from "@emotion/react";

export default function About() {
  return (
    <div style={containerStyle}>
      <Global
        styles={css`
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      />

      <h1 style={headingStyle}>
        Wait... Can I Actually Raise $10M Just By Asking?
      </h1>

      <div style={cardStyle}>
        <p style={textStyle}>
          <span style={highlightStyle}>This is ridiculous.</span> And that's
          exactly why I'm doing it. Ten Million Quest is my absurd experiment to
          see if someone (me) can go from $0 to $10,000,000 just by politely
          asking the internet for money.
        </p>

        <div style={iconRowStyle}>
          <div style={iconStyle}>💡</div>
          <div style={iconStyle}>🤔</div>
          <div style={iconStyle}>🤑</div>
        </div>
      </div>

      <div style={cardStyle}>
        <h2 style={subHeadingStyle}>How This Works</h2>
        <p style={textStyle}>
          1. I ask for money
          <br />
          2. You (maybe) give me money
          <br />
          3. We see how far this can go
          <br />
          <span style={{ fontStyle: "italic" }}>That's literally it.</span>
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={subHeadingStyle}>Why Give Me Money?</h2>
        <p style={textStyle}>
          Honestly? <span style={highlightStyle}>No good reason.</span> But if
          you need justification:
        </p>
        <ul style={listStyle}>
          <li>It's funny</li>
          <li>You'll be part of an internet experiment</li>
          <li>I'll do increasingly dumb challenges as we hit milestones</li>
          <li>35% goes back to random donors (so you might profit!)</li>
          <li>Why not?</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2 style={subHeadingStyle}>The Real Reason</h2>
        <p style={textStyle}>
          I wanted to test if the internet would fund a completely transparent,
          no-product, no-service, just-because fundraiser. The answer is
          probably no.
          <span style={highlightStyle}> But maybe?</span>
        </p>
      </div>

      <div style={{ ...cardStyle, textAlign: "center" }}>
        <p style={textStyle}>Wanna see how far we can take this joke?</p>
        <a href="/donate" style={buttonStyle}>
          Throw Money At The Problem
        </a>
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
  padding: "25px",
  marginBottom: "25px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "rgba(50, 50, 90, 0.6)",
    transform: "translateY(-3px)",
  },
};

const textStyle = {
  color: "rgba(255, 255, 255, 0.9)",
  lineHeight: "1.6",
  fontSize: "1.1rem",
  marginBottom: "0",
};

const highlightStyle = {
  fontWeight: "bold",
  color: "#8E54E9",
};

const iconRowStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  margin: "20px 0",
};

const iconStyle = {
  fontSize: "2rem",
  animation: "bounce 2s infinite",
};

const subHeadingStyle = {
  fontSize: "1.5rem",
  color: "#4ecdc4",
  marginBottom: "15px",
  background: "linear-gradient(90deg, #4ECDC4 0%, #00d2ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const listStyle = {
  paddingLeft: "20px",
  margin: "15px 0",
  color: "rgba(255, 255, 255, 0.8)",
  lineHeight: "1.8",
};

const buttonStyle = {
  background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "50px",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  display: "inline-block",
  marginTop: "15px",
  textDecoration: "none",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(142, 84, 233, 0.4)",
  },
};
