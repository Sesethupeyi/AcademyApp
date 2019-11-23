import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Label} from 'semantic-ui-react'

const SignedOut =()=> {
  
    return(
    <ul>
       
   <Label as='a' ><Link to="/auth/signUp">Sign Up </Link></Label>
   <Label as='a'><Link to="/auth/signIn">Log in </Link></Label>
    
   </ul>
  )
}

export default SignedOut