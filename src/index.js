import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { LogIn, Register } from "./pages/accountmanager";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path ="/" element={<App/>}/>
      <Route path="/login/callback" element={<LogIn/>}/>
      <Route path="/accountmanager/login" element={<LogIn/>}/>
      <Route path="/accountmanager/signup" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
);