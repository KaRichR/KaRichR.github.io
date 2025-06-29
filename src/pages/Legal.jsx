import React from "react";

export default function Legal() {
  return (
    <div style={styles.container}>
      <h1>Legal Disclaimer</h1>

      <p>
        <strong>Donation Quest</strong> is a personal social experiment and is
        not a registered charity or nonprofit organization.
      </p>

      <h2>Donation Distribution</h2>
      <ul>
        <li>65% of all donations go directly to the project creator (me).</li>
        <li>
          35% will be used for community giveaways, random prizes, and
          content-related milestones.
        </li>
      </ul>

      <h2>No Guarantees</h2>
      <p>
        Donating does not guarantee you will receive anything in return. This is
        not an investment or purchase. It’s purely voluntary and for
        entertainment.
      </p>

      <h2>Transparency</h2>
      <p>
        Progress and fund usage will be updated regularly on the website. The
        project is intentionally absurd and transparent.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or concerns? Email me at <strong>you@example.com</strong>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "40px 20px",
    color: "white",
    background: "rgba(30, 30, 60, 0.8)",
    borderRadius: "16px",
    lineHeight: "1.6",
  },
};
