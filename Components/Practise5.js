import React, { Component } from 'react';
import Modal5 from './Modal5';
import { Container,Image, Grid  } from 'semantic-ui-react'
import anal1 from './images/anal1.png';

class Practise5 extends Component{
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
      src= {anal1}
      as='a'
      size='medium'
      onClick={this.showModal}
     
    />
<Modal5 show= {this.state.show} onClose ={this.showModal}  />      
      </Grid.Column>
    </Grid.Row>
  </Grid>

</div>

)


}


}

export default Practise5

