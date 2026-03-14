import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

// Entry point: get the DOM node that will hold the React tree (see index.html #root).
const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

// React 18+ createRoot API: replaces the old ReactDOM.render() and mounts the app into the DOM root.
// StrictMode helps catch side effects and deprecated patterns during development.
// Router wraps the app so useLocation() and hash-based nav work; future flags opt into v7 behavior.
createRoot(rootEl).render(
  <StrictMode>
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </Router>
  </StrictMode>
);
