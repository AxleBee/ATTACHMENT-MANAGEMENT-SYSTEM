import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SupervisorLogin from './components/Supervisor/Dashboard'
function App() {
  return (
  

    <Router>
        <Routes>
          <Route path="/supervisor-dashboard" element={<SupervisorLogin/>}/>
        </Routes>
    </Router>

  );
}

export default App;
