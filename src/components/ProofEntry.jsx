import React from "react";

const ProofEntry = ({ date, platforms, amount, note, imageUrls }) => {
  return (
    <div style={entryStyle}>
      <div style={entryHeaderStyle}>
        <span style={dateStyle}>{date}</span>
        <span style={amountStyle}>${amount.toLocaleString()}</span>
      </div>

      <div style={platformsStyle}>
        {platforms.map((platform, i) => (
          <span key={i} style={getPlatformStyle(platform)}>
            {platform}
          </span>
        ))}
      </div>

      {note && <p style={noteStyle}>📝 {note}</p>}

      <div style={imagesContainerStyle}>
        {imageUrls.map((url, i) => (
          <div key={i} style={imageWrapperStyle}>
            <img src={url} alt={`${platforms[i]} proof`} style={imageStyle} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={viewOriginalStyle}
            >
              View {platforms[i]} original
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Platform-specific styling
const getPlatformStyle = (platform) => {
  const baseStyle = {
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "white",
  };

  switch (platform.toLowerCase()) {
    case "buymeacoffee":
      return {
        ...baseStyle,
        backgroundColor: "rgba(255, 188, 66, 0.3)", // BMC orange
        border: "1px solid rgba(255, 188, 66, 0.7)",
      };
    case "paypal":
      return {
        ...baseStyle,
        backgroundColor: "rgba(0, 156, 222, 0.3)", // PayPal blue
        border: "1px solid rgba(0, 156, 222, 0.7)",
      };
    case "ko-fi":
      return {
        ...baseStyle,
        backgroundColor: "rgba(255, 105, 120, 0.3)", // Ko-fi pink
        border: "1px solid rgba(255, 105, 120, 0.7)",
      };
    default:
      return {
        ...baseStyle,
        backgroundColor: "rgba(71, 118, 230, 0.3)",
        border: "1px solid rgba(71, 118, 230, 0.7)",
      };
  }
};

// Styles
const entryStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  borderLeft: "4px solid #3498db",
  marginBottom: "30px",
  color: "rgba(255, 255, 255, 0.9)",

  "@media (min-width: 480px)": {
    padding: "20px",
  },
};

const entryHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
};

const platformsStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "15px",
  flexWrap: "wrap",
};

const imagesContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr", // Single column on mobile
  gap: "15px",
  marginTop: "15px",

  "@media (min-width: 480px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  },
};

const imageWrapperStyle = {
  textAlign: "center",
};

const amountStyle = {
  fontWeight: "bold",
  fontSize: "1.1rem",
  color: "#4ecdc4",
};

const noteStyle = {
  margin: "10px 0",
  color: "rgba(255, 255, 255, 0.8)",
  fontStyle: "italic",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "400px",
  borderRadius: "5px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const viewOriginalStyle = {
  display: "inline-block",
  marginTop: "8px",
  fontSize: "0.9rem",
  color: "#8E54E9",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
};

const dateStyle = {
  fontWeight: "bold",
  color: "#8E54E9",
};

export default ProofEntry;
