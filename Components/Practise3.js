import React, { Component } from 'react';
import Modal3 from './Modal3';
import { Container,Image, Grid  } from 'semantic-ui-react'
import alg1 from './images/alg1.jpg';

class Practise3 extends Component{
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
      src= {alg1}
      as='a'
      size='medium'
      onClick={this.showModal}
     
    />
<Modal3 show= {this.state.show} onClose ={this.showModal}  />      
      </Grid.Column>
    </Grid.Row>
  </Grid>

</div>

)


}


}

export default Practise3