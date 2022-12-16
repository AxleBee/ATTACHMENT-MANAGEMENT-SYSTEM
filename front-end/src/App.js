import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SupervisorDashboard from "./components/Supervisor/Dashboard";
import LogBookFeeback from "./components/Supervisor/logbook-feedback.";
import Login from "./components/Login";
import Dashboard from "./components/Employer/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/supervisor-dashboard" element={<SupervisorDashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/feedback/:id" element={<LogBookFeeback />} />
        <Route path="/employer-dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
