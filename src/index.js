import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./components/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Router basename="/">
      <App/>
    </Router>
  </AuthProvider>
);