import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './views/pages/landing';
import { Route, Routes, useNavigate } from "react-router-dom";
import { API, setAuthToken } from "./config/api";
import { useState, useEffect, useContext } from "react";
import { UserContextToken } from './views/components/context/showContext';
import Users from './views/pages/user';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContextToken);
  // console.clear();
  console.log(state);

  return (
    <div style={{ height: "100vh" }} className="w-100">
      <Routes>
        < Route exact path="/" element={<Landing />} />
        < Route exact path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
