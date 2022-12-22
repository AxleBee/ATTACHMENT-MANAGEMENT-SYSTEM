import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SupervisorDashboard from "./components/Supervisor/Dashboard";
import LogBookFeeback from "./components/Supervisor/logbook-feedback.";
import Login from "./components/Login";
import Dashboard from "./components/Employer/Dashboard";
import Employer from "./components/Employer/Employer";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./components/Students/posts";
import { UserList } from "./components/Students/users";
import { StudentDashboard } from "./components/Students/DashboardStudent";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/supervisor-dashboard"
            element={<SupervisorDashboard />}
          />
          <Route path="/feedback/:id" element={<LogBookFeeback />} />
          <Route path="/" element={<Login />} />
          <Route path="/employer-dashboard" element={<Dashboard />} />
          <Route path="/employer-feedback" element={<Employer />} />
        </Routes>
      </Router>
      <Admin dataProvider={dataProvider} dashboard={StudentDashboard}>
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
        />
        <Resource name="users" list={UserList} />
      </Admin>
    </>
  );
}
export default App;
