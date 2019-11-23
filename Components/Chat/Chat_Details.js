import React from 'react';
import {Card} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import styles from '../style.css';
import { compose } from 'redux'

const Chat_Details = (props) =>{
    const { chat, auth } =props; 
    if(!auth.uid) return <Redirect to='/auth/signIn' />

      if(chat){
 return(
   <div className='card'>
  <div class="ui cards" >
  <div class="ui card" style={{backgroundColor: "orange"}}  >
    <div class="content">
      <div class="header">{ chat.name}</div>
      <div class="meta">{moment(chat.time.toDate()).calendar()}</div>
      <div class="description">
<p>{ chat.chat }</p>
      </div>
    </div>
  </div>
  
  </div>

  </div>
      )
      }

}

const mapStateToProps = (state, ownProps) => {
 
  const id =ownProps.match.params.id;
  const chats = state.firestore.data.chats;
  const chat = chats ? chats[id]: null;
    return {
  chat: chat,
    auth: state.firebase.auth
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'chats' }
  ])
)(Chat_Details)