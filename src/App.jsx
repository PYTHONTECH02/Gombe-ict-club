import { Routes, Route, Link } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import CodingPage from "./pages/CodingPage";
import CyberPage from "./pages/CyberPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <div>
      <nav className="nav">
        <h1>Gombe ICT Club</h1>

        <div className="links">
          <Link to="/">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/coding">Coding</Link>
          <Link to="/cyber">Cyber</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/cyber" element={<CyberPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}
