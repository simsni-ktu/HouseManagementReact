import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "react-auth-kit/dist/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <div className="min-h-screen bg-gray-500">
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    </div>
  </React.StrictMode>
);
