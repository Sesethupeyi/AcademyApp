import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form,Label, Header} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { signUp } from '../../Store/Actions/authActions'
 
class  SignUp extends Component {
   state = { 
       email : '',
       password : '',
       firstName : '',
       lastName : ''
   }

  handleChange = (e) =>{
   this.setState({
       [e.target.id] : e.target.value 
   })
}
  handleSubmit = (e) =>{
e.preventDefault();
  console.log(this.state);
   this.props.signUp(this.state);
  }


  render(){
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/landing' />
  return(
      <div>
        <br />
          <Header as='h1'>Sign Up</Header>
<Form onSubmit={this.handleSubmit}>
    <Form.Field>
    <br />
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
    <Form.Field>
    <br />
      <label>First Name</label>
      <input placeholder='firstName' id="firstName" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
    <br />
      <label>Last Name</label>
      <input placeholder='LastName' id="lastName" onChange={this.handleChange} />
    </Form.Field>
    <br />
    <Button type='submit' >SignUp</Button>
    <div>
      { authError ? <p>{ authError }</p> : null }
    </div>
  </Form>
 
  </div>
  )
  }
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 