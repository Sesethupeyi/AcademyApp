import React from 'react';
import { Grid ,Header ,List ,Image ,Divider ,Advertisement, Button } from 'semantic-ui-react';  
import styles from './style.css';
import img from './images/math.jpg'

const Landing = ()=>{

return(

  <div>

    <Grid columns={1} divided>
    <Grid.Row >
    <Grid.Column width={16}>
       
      <div className='img'>
      <Header as='h1' className='WelCourse' style={{color: "yellow"}}>Welcome</Header> 
      <br />
      <img src= {img} width='400'   height='200'  />

        </div>

        <Divider />
         
       </Grid.Column>      
     </Grid.Row>
    <Grid.Row >
    <Grid.Column width={16}>

    <Header as='h1' className='WelCourse' style={{color: "lightblue"}}>Available courses</Header>

      <div className='course'>
      <Button basic color="green">Basic Red</Button><Button basic color="blue">Basic orange</Button>
      <Button basic color="orange">Basic Red</Button><Button basic color="red">Basic orange</Button>
      <Button basic color="yellow">Basic Red</Button><Button basic color="orange">Basic orange</Button>
        </div>

        <Divider />
      
       </Grid.Column>      
      
 
    </Grid.Row>

    
  </Grid>


  </div>

)

}

export default Landing