import React from 'react'
import { LoginContext } from '../LoginContext/LoginContext'
import {useContext} from 'react';

export default function Profile() {
    const {userName,email} = useContext(LoginContext);

  return (
    <div>
        <h1>{userName}</h1>
        <h2>{email}</h2>
    </div>
  )
}
