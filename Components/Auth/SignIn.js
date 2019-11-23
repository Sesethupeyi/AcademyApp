import React, { Component } from 'react';
import { Button, Form,Label, Header} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../Store/Actions/authActions'

class  SignIn extends Component {
   state = { 
       email : '',
       password : ''
   }

  handleChange = (e) =>{
   this.setState({
       [e.target.id] : e.target.value 
   })
}
  handleSubmit = (e) => {
e.preventDefault();
this.props.signIn(this.state);
  console.log(this.state);
  }


  render(){
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/landing' />
  return(
      <div>
         <br />
          <br />
          <Header as='h1'>Sign In</Header>
<Form onSubmit={this.handleSubmit}>
    <Form.Field>
    <br />
      <label>Email</label>
      <input placeholder='Email' id="email" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
    <br />
      <label>Password</label>
      <input placeholder='Password' id="password" onChange={this.handleChange}  />
    </Form.Field>
    <Form.Field>
    </Form.Field>
    <br />
    <br />
    <Button type='submit'>Submit</Button>
     <div>
       { authError ? <p>{authError}</p> : null }
     </div>
  </Form>

 
  </div>
  )
  }
}

const mapStateToProps = (state) => {
    return {
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  signIn: (creds) => dispatch(signIn(creds)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)