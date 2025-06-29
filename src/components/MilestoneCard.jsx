import React from "react";

export default function MilestoneCard({ milestone }) {
  return (
    <div
      style={{
        background: "white", // Keep white background for cards
        borderRadius: "12px",
        padding: "1rem",
        marginBottom: "1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        color: "#333", // Explicit black text
        borderLeft: `4px solid ${milestone.completed ? "#4CAF50" : "#FFC107"}`,
        "@media (min-width: 480px)": {
          padding: "1rem",
        },
      }}
    >
      <h2 style={{ color: "#222", marginBottom: "0.5rem" }}>
        ${milestone.goal} Milestone
      </h2>
      <p style={{ color: "#444", marginBottom: "0.5rem" }}>
        <strong style={{ color: "#222" }}>Challenge:</strong>{" "}
        {milestone.challenge}
      </p>
      <p style={{ color: "#444", marginBottom: "0.5rem" }}>
        <strong style={{ color: "#222" }}>Giveaway Budget:</strong> $
        {milestone.giveawayBudget}
      </p>
      <p
        style={{
          color: milestone.completed ? "#4CAF50" : "#FFC107",
          fontWeight: "bold",
        }}
      >
        Status: {milestone.completed ? "✅ Done" : "🚧 Upcoming"}
      </p>
    </div>
  );
}
