import React from 'react';
import SignedIn from './Layout/SignedIn';
import SignedOut from './Layout/SignedOut';
import { Header, Grid, Icon, Label } from 'semantic-ui-react';
import styles from './style.css';
import { connect } from 'react-redux'



const Menu =(props)=>{
  const { auth, profile } = props;
  console.log(auth);
  const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;
return(
<nav style={ {backgroundColor: "lightblue"} }>
<div className='menu' >

<div><p style={{color: "white"}} ><Icon name="users" inverted color="green" circular/>Together we learn</p> </div>
<div><Header as='h1' style={{color: "blue"}}>  <Icon.Group size='medium' style={ {color: "yellow"} }><Icon name='puzzle' /> <Icon corner name='add' />
  </Icon.Group> Academy Math  12</Header></div>
{links}
</div>
</nav>

)
}

const mapStateToProps = (state) =>{
 console.log(state);
    return{
   auth: state.firebase.auth,
   profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Menu)