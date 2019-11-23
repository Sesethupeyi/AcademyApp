import React, { Component } from 'react';
import Modal2 from './Modal2';
import { Container,Image, Grid  } from 'semantic-ui-react'
import calc1 from './images/calc1.png';

class Practise2 extends Component{
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
      src= {calc1}
      as='a'
      size='medium'
      onClick={this.showModal}
     
    />
<Modal2 show= {this.state.show} onClose ={this.showModal}  />      
      </Grid.Column>
    </Grid.Row>
  </Grid>

</div>

)


}


}

export default Practise2

