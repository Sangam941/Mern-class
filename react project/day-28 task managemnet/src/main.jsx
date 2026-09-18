import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";
import TaskContext from "./context/TaskContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <AuthContext>
          <TaskContext>
            <App />
            <Toaster/>
          </TaskContext>
        </AuthContext>
      </BrowserRouter>
    
  </StrictMode>,
);
