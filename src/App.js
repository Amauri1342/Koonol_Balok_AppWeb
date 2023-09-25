import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Navigate to="/Home" />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
