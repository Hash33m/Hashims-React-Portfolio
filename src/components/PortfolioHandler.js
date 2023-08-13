import React, { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => setActivePage("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setActivePage("about")}>About</button>
          </li>
          <li>
            <button onClick={() => setActivePage("contact")}>Contact</button>
          </li>
          <li>
            <button onClick={() => setActivePage("portfolio")}>Portfolio</button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
