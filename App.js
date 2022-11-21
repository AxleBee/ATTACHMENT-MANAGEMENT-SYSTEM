import * as React from 'react';
import {Route} from 'react-router'
import{Admin,Resource} from 'react-admin'
import authProvider from './authProvider'
import { PostList,PostEdit,PostCreate } from './posts';
import { UserList } from './users';
import Dashboard from './Dashboard'
import { ProfileEdit } from './profile';
import MyLayout from './MyLayout';
import jsonServerProvider from 'ra-data-json-server';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
<Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} 
customRoutes={[
    <Route
        key="my-profile" path='/my-profile' component={ProfileEdit}/>
]}
appLayout={MyLayout}
>

  <Resource name='posts' list={PostList} edit={PostEdit} create ={PostCreate}/>
  <Resource name='users' list={UserList}/>
</Admin>
)
export default App;



