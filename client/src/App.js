import logo from "./logo.svg";
import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export const store = createContext();

function App() {
  const [token, setToken] = useState(null);
  const [udata,setUserData] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]} >
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
