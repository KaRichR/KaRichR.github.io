import React from "react";

export default function ProgressBar({ current, goal, displayPercentage }) {
  // Calculate the width percentage based on current/goal
  const widthPercentage = Math.min((current / goal) * 100, 100);

  // Use displayPercentage if provided, otherwise calculate from current/goal
  const shownPercentage =
    displayPercentage !== undefined ? displayPercentage : widthPercentage;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          background: "#eee",
          height: "20px",
          borderRadius: "10px",
          width: "100%",
          position: "relative",
          overflow: "hidden",

          "@media (min-width: 480px)": {
            gap: "10px",
            margin: "10px 0",
          },
        }}
      >
        <div
          style={{
            width: `${widthPercentage}%`,
            backgroundColor: "#4caf50",
            height: "100%",
            transition: "width 0.5s ease",
          }}
        />
      </div>
      <span>{shownPercentage.toFixed(2)}%</span>
    </div>
  );
}
