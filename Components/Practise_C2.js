import React, { Component } from 'react';
import Modal from './Modal';
import { Container,Image, Grid  } from 'semantic-ui-react'
import trig from './images/Trigonometry.jpg';

class Practise_C2 extends Component{
    state ={
        modal:[
          { show: false}
        ]
      }
    
      showModal = () => {
        this.setState ({
      ...this.state,
        show: !this.state.show
        })  
    } 

render(){

return(
<div>
<Grid>
    <Grid.Row>            
      <Grid.Column width={8}>
      
    <Image
      src= {trig}
      as='a'
      size='medium'
      onClick={this.showModal}
     
    />
<Modal show= {this.state.show} onClose ={this.showModal}  />      
      </Grid.Column>
    </Grid.Row>
  </Grid>

</div>

)


}


}

export default Practise_C2