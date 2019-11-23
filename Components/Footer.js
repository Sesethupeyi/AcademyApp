import React from 'react';
import { Header, Grid, Icon, Label, Image, Card } from 'semantic-ui-react';
import styles from './style.css';

const Footer =()=>{
 

return(
<div className='footer'>
<Grid columns={4} padded='vertically'>
      <Grid.Column>
      <Card
    
    header='Did you know'
   
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />
      </Grid.Column>
      <Grid.Column>
      <Card
    header='Did you know'
    
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />
      </Grid.Column>
      <Grid.Column>
      <Card
    header='Did you know'  

    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />
      </Grid.Column>
      <Grid.Column>
      <Card
    header='Did you know'  

    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />
      </Grid.Column>
      
    </Grid>

</div>
)
}



export default Footer