import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function AuthenticatedRoutes() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AuthenticatedRoutes;
