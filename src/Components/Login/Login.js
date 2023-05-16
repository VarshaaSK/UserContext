import React , {useContext} from 'react'
import { LoginContext } from '../LoginContext/LoginContext'

export default function Login() {
    
    const {setEmail,setUsername,setShowProfile} = useContext(LoginContext);

  return (
    <div>
        <input placeholder="Username" type='text' onChange={(e)=>setUsername(e.target.value)}></input>
        <input placeholder="email" type='text' onChange={(e)=>setEmail(e.target.value)}></input>

        <button onClick={()=>setShowProfile(true)}>Login</button>
    </div>
  )
}
