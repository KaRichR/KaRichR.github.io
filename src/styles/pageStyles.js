export const containerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "30px",
  boxSizing: "border-box", // ← Fixes width overflow!
  backgroundColor: "rgba(30, 30, 60, 0.7)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  marginTop: "40px",
  marginBottom: "40px",
};

export const headingStyle = {
  fontSize: "2.5rem",
  background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "25px",
  fontWeight: "800",
};

export const cardStyle = {
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

export const buttonStyle = {
  background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "50px",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(142, 84, 233, 0.4)",
  },
};
