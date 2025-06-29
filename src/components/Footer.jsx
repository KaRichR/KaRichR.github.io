import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Ten Million Quest. All rights reserved. |{" "}
        <a href="/legal" style={styles.link}>
          Legal Disclaimer
        </a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#1e1e2e",
    color: "#aaa",
    fontSize: "0.9rem",
  },
  text: {
    margin: 0,
  },
  link: {
    color: "#8E54E9",
    textDecoration: "none",
  },
};
