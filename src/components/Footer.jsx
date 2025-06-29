import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Ten Million Quest. All rights reserved. |{" "}
        <Link to="/legal" style={styles.link}>
          Legal Disclaimer
        </Link>
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
