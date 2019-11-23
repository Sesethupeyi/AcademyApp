import React, { Component } from 'react';
import Modal6 from './Modal6';
import { Container,Image, Grid  } from 'semantic-ui-react';
import seq1 from './images/seq1.gif';

class Practise6 extends Component{
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
      src= {seq1}
      as='a'
      size='medium'
      onClick={this.showModal}
     
    />
<Modal6 show= {this.state.show} onClose ={this.showModal}  />      
      </Grid.Column>
    </Grid.Row>
  </Grid>

</div>

)


}


}

export default Practise6