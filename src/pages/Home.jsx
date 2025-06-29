import React, { useState } from "react";
import { milestonePhase1, milestonePhase2 } from "../data/milestones";
import MilestoneCard from "../components/MilestoneCard";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("phase1");

  // ✅ Manual raised amount
  const TOTAL_RAISED = 0;
  const PHASE1_GOAL = 1000000;
  const PHASE2_GOAL = 10000000;

  // Phase calculations
  const phase1Total = Math.min(TOTAL_RAISED, PHASE1_GOAL);
  const phase1Percentage = (phase1Total / PHASE1_GOAL) * 100;
  const phase2Effective = Math.max(0, TOTAL_RAISED - PHASE1_GOAL);
  const phase2Percentage = (TOTAL_RAISED / PHASE2_GOAL) * 100;

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div style={outerWrapper}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Donation Quest Progress</h1>

        <div style={summaryCard}>
          <h2 style={totalRaisedStyle}>${TOTAL_RAISED.toLocaleString()}</h2>
          <p style={subtitleStyle}>Total Raised (manually updated)</p>
        </div>

        <div style={tabsContainer}>
          <button
            onClick={() => handleTabChange("phase1")}
            style={activeTab === "phase1" ? activeTabStyle : inactiveTabStyle}
          >
            🚀 Phase 1 ($0 - $1M)
          </button>
          <button
            onClick={() => handleTabChange("phase2")}
            style={activeTab === "phase2" ? activeTabStyle : inactiveTabStyle}
          >
            🌍 Phase 2 ($1M - $10M)
          </button>
        </div>

        <div style={contentCard}>
          {activeTab === "phase1" ? (
            <>
              <ProgressBar current={phase1Total} goal={PHASE1_GOAL} />
              <p style={percentageText}>
                {phase1Percentage.toFixed(2)}% of $1,000,000
              </p>
              <h3 style={sectionTitle}>Phase 1 Milestones</h3>
              <div style={milestoneListStyle}>
                {milestonePhase1.map((m) => (
                  <MilestoneCard key={m.id} milestone={m} />
                ))}
              </div>
            </>
          ) : (
            <>
              <ProgressBar
                current={phase2Effective}
                goal={PHASE2_GOAL - PHASE1_GOAL}
                displayPercentage={phase2Percentage}
              />
              <p style={percentageText}>
                {phase2Percentage.toFixed(2)}% of $10,000,000
              </p>
              <h3 style={sectionTitle}>Phase 2 Milestones</h3>
              <div style={milestoneListStyle}>
                {milestonePhase2.map((m) => (
                  <MilestoneCard key={m.id} milestone={m} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

//Styles
const containerStyle = {
  width: "100%", // Take full width on mobile
  maxWidth: "800px", // Limit to 800px on larger screens
  padding: "20px", // Adjust padding for mobile
  boxSizing: "border-box",
  backgroundColor: "rgba(30, 30, 60, 0.7)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  margin: "40px auto", // Center the container with auto margins
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
};

// Updated outerWrapper to handle mobile padding better
const outerWrapper = {
  display: "flex",
  justifyContent: "center",
  padding: "20px", // Reduced padding for mobile
  boxSizing: "border-box",
  minHeight: "100vh",
  backgroundColor: "#12122c",
  width: "100%", // Ensure it takes full width
};

const headingStyle = {
  fontSize: "2.5rem",
  background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "20px",
  fontWeight: "800",
  textAlign: "center",

  "@media (min-width: 360px)": {
    fontSize: "2rem",
  },

  "@media (min-width: 480px)": {
    fontSize: "2.5rem",
  },
};

const summaryCard = {
  backgroundColor: "rgba(40, 40, 80, 0.4)",
  borderRadius: "12px",
  padding: "15px 10px", // Adjusted padding for mobile
  marginBottom: "25px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  textAlign: "center",
  width: "100%",
  boxSizing: "border-box",
  overflow: "hidden", // Prevent any potential overflow
};

const totalRaisedStyle = {
  fontSize: "2rem", // Smaller base size
  fontWeight: "bold",
  margin: "10px 0",
  color: "#4ecdc4",
  textShadow: "0 2px 10px rgba(78, 205, 196, 0.3)",
  wordBreak: "break-word", // Prevent overflow
  overflowWrap: "break-word", // Alternative for some browsers
  padding: "0 10px", // Add some padding to prevent edge crowding
  boxSizing: "border-box",

  "@media (min-width: 360px)": {
    fontSize: "2.5rem", // Slightly larger on very small but not tiny screens
  },

  "@media (min-width: 480px)": {
    fontSize: "3rem", // Full size on tablets and up
  },
};

const subtitleStyle = {
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "1rem",
  margin: 0,
};

const tabsContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "20px",
  flexWrap: "wrap",

  "@media (max-width: 480px)": {
    gap: "8px",
    "& button": {
      padding: "8px 12px",
      fontSize: "0.9rem",
    },
  },
};

const baseTabStyle = {
  padding: "12px 25px",
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "1rem",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  minWidth: "140px", // Make tabs same width to prevent jump
  justifyContent: "center",
};

const activeTabStyle = {
  ...baseTabStyle,
  background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
  color: "white",
  boxShadow: "0 4px 15px rgba(142, 84, 233, 0.3)",
};

const inactiveTabStyle = {
  ...baseTabStyle,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "rgba(255, 255, 255, 0.7)",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
};

const contentCard = {
  backgroundColor: "rgba(40, 40, 80, 0.4)",
  borderRadius: "12px",
  padding: "30px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  boxSizing: "border-box",
};

const percentageText = {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "1.1rem",
  margin: "15px 0",
};

const sectionTitle = {
  fontSize: "1.5rem",
  color: "#4ecdc4",
  margin: "25px 0 15px 0",
  background: "linear-gradient(90deg, #4ECDC4 0%, #00d2ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const milestoneListStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "20px",
  flexWrap: "nowrap",
};
