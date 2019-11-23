import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChat } from '../../Store/Actions/chatActions';
import { Redirect } from 'react-router-dom';
import styles from '../style.css';
import { Button, Form,Label, Header,TextArea} from 'semantic-ui-react';


class  Create_Chat extends Component {
   state = { 
       name : '',
       chat : ''
   }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value 
   })
}
  handleSubmit = (e) =>{
e.preventDefault();
this.props.createChat(this.state);
this.props.history.push('/board/board');
  
  }


  render(){
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/auth/signIn' />
  return(
      <div className='chat'>
          <Header as='h3' className='WelCourse' style={{color: "lime"}}>Ask for Help!</Header>
<Form onSubmit={this.handleSubmit}>
    <Form.Field>
  <br />
  <br />
  <br />
  <br />
  <br />
      <label>Name</label>
      <input placeholder='Name' id="name" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
  <br />
  <br />
  <br />
  <br />
      <label>Chat</label>
      <TextArea id="chat" placeholder='Ask for Help/Add a solution' style={{ minHeight: 100 }} onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
    </Form.Field>
    <Button type='submit'>Talk</Button>
  </Form>
 
  </div>
  )
  }
}

const mapStateToProps = (state) =>{
   return {
     auth: state.firebase.auth
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChat: (chat) => dispatch(createChat(chat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create_Chat)