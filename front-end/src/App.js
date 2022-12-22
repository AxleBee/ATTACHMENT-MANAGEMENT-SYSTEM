import * as React from 'react';
import{Admin,Resource} from 'react-admin';
import { PostList,PostEdit,PostCreate } from './posts';
import { UserList } from './users';
import { Dashboard } from './Dashboard';
import jsonServerProvider from 'ra-data-json-server';

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



