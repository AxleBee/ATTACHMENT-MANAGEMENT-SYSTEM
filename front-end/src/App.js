import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SupervisorDashboard from './components/Supervisor/Dashboard'
import Login from './components/Login';
function App() {
  return (
  

    <Router>
        <Routes>
          <Route path="/supervisor-dashboard" element={<SupervisorDashboard/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
    </Router>

  );
}

export default App;
