import React, { Component } from 'react';
import { Form, radio, Button } from 'semantic-ui-react';
import words from '../Words/words.json'



const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
  }
  const modalStyle ={
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 400,
  margin: '0 auto',
  padding: 30,
  position: "relative"
  }
  const footerStyle ={
  position: "absolute",
  bottom: 20
  
  }
  


  
class Modal3 extends Component{

  state = {
    Questions: [ ],
    clicks:0,
      show:true
}
componentDidMount() {

fetch('http://localhost:5000/api/')
   .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          Questions: json 
        })
console.log(this.state); 
console.log(this.state.Questions[2].title);       
      })

}
  
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
    this.setState({ clicks: 0 });
  }
  setGender(event) {
    console.log(event.target.value);
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

render(){

 if(!this.props.show){
      return null ;
    }
    return(
    <div style = {backdropStyle}>
    <div style = {modalStyle}>
    <h1>{this.state.Questions[2].title} </h1>
    <form onSubmit={this.handleSubmit}>  
  <p> {this.state.Questions[2].quetioon[this.state.clicks]} </p>

  <div onChange={this.setGender.bind(this)}>

<input type="radio" value="MALE" name="gender"/> {this.state.Questions[2].options[this.state.clicks][0]} <p></p>
<input type="radio" value="FEMALE" name="gender"/> {this.state.Questions[2].options[this.state.clicks][1]}<p></p>
<input type="radio" value="FEMALE" name="gender"/> {this.state.Questions[2].options[this.state.clicks][2]}<p></p>
<input type="radio" value="FEMALE" name="gender"/> {this.state.Questions[2].options[this.state.clicks][3]}

</div>
    </form>
      
   <div style = {footerStyle}> 
   <Button primary onClick = {(e) => {this.onClose(e)}}>Close</Button> 
   <Button primary onClick={this.IncrementItem} >Check answers/Next Question</Button>
 </div>
 <h2>{ this.state.clicks }</h2>
    </div>
      </div>

    )




}


}

export default Modal3;