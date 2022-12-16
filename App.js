import React,{useState} from 'react';
import './App.css';
import Card from './Components/Card'


function App() {
  const [user, setUser] =useState('User Name');
  const [department,setDepartment] = useState ('Department');
  const [position,setTitle] = useState("Posdition") 
  const [email,setEmail] = useState ('Email'); 
    return (
      <div className="App">
        <Card user={user} department={department} position={position} email={email}/>
      </div>
    )
  
}

export default App
