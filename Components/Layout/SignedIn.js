import React from 'react';
import {Label} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import styles from '../style.css';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from '../../Store/Actions/authActions'


const SignedIn = (props) => {
  
    return(
    <ul>


  <Label as='a' > {props.profile.initials}</Label>
   <Label as='a' ><a onClick ={props.signOut} style={{color: "black"}} >Log Out </a></Label>
  
   </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
   signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn) 