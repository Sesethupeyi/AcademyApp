import React,{ Component } from 'react';
import Chat_List from '../Chat/Chat_List';
import Not from './Not';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect , Link, NavLink } from 'react-router-dom';
import { Grid, Image, Header, Menu,Icon,Label,Divider } from 'semantic-ui-react' 

class Board extends Component{

  render(){
   console.log(this.props);
   const { Cchat, auth } = this.props;

       if(!auth.uid) return <Redirect to='/auth/signIn' />


      return(
  <div>
    
<Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>
    </Header>
    
     <Label as='a'  ><Link to="/chat/create_chat">Ask a question </Link> </Label>

 <Divider />   

 <Grid columns={2} padded='vertically'>
      <Grid.Column>
     <Chat_List Chat={ Cchat } />   
      </Grid.Column>

      <Grid.Column>
       <Not />
      </Grid.Column>
    </Grid>

  </div>
      )
  }
}
 
const mapStateToProps = (state) => {
    console.log(state);
  return {
    Cchat : state.firestore.ordered.chats,
      auth: state.firebase.auth

  }
}


export default compose(
  connect(mapStateToProps),
    firestoreConnect([
      { collection: 'chats' }
    ])
)(Board) 