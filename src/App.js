import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Proof from "./pages/Proof";
import Socials from "./pages/Socials";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyles } from "./styles/globalStyles";
import Legal from "./pages/Legal";

function App() {
    useEffect(() => {
    const redirectedPath = sessionStorage.getItem("redirect");
    if (redirectedPath) {
      sessionStorage.removeItem("redirect");
      window.history.replaceState(null, "", redirectedPath);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <div className="app">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/about" element={<About />} />
              <Route path="/proof" element={<Proof />} />
              <Route path="/socials" element={<Socials />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
