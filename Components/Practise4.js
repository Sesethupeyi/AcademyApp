import React, { Component } from 'react';
import Modal4 from './Modal4';
import { Container,Image, Grid  } from 'semantic-ui-react'
import pol1 from './images/pol1.jpg';

class Practise4 extends Component{
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
      src= {pol1}
      as='a'
      size='medium'
      onClick={this.showModal}
     
    />
<Modal4 show= {this.state.show} onClose ={this.showModal}  />      
      </Grid.Column>
    </Grid.Row>
  </Grid>

</div>

)


}


}

export default Practise4
