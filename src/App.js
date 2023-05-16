import logo from './logo.svg';
import './App.css';
import { LoginContext } from './Components/LoginContext/LoginContext';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import {useState} from 'react';

function App() {

  const [userName , setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [showProfile , setShowProfile] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{userName,email,showProfile,setUsername,setEmail,setShowProfile}}>
        {showProfile?<Profile userName={userName} email = {email}/>:<Login setEmail={setEmail} setUsername={setUsername}/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
