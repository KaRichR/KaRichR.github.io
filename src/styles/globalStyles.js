import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        background: linear-gradient(
          135deg,
          #1a1a2e 0%,
          #16213e 50%,
          #0f3460 100%
        );
        color: #ffffff;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        min-height: 100vh;
        line-height: 1.6;
      }

      /* Navigation Links */
      nav a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: all 0.3s ease;
        font-weight: 500;
      }

      nav a:hover {
        color: white !important;
        font-weight: 600;
        text-decoration: none !important;
      }

      nav .nav-active {
        color: #00d2ff;
        font-weight: 600;
      }

      /* Regular Links (preserve existing) */
      a {
        color: #8e54e9;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      a:hover {
        color: #4776e6;
        text-decoration: underline;
      }

      @media (max-width: 480px) {
        html {
          font-size: 14px;
        }

        h1 {
          font-size: 1.8rem;
        }

        h2 {
          font-size: 1.5rem;
        }
      }
    `}
  />
);
