import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import Menu from './Components/Menu';
import NavBar from './Components/NavBar';
import Nav2 from './Components/Nav2';
import Landing from './Components/Landing';  
import Practise from './Components/Practise';  
import Practise2 from './Components/Practise2'; 
import Practise3 from './Components/Practise3'; 
import Practise4 from './Components/Practise4'; 
import Practise5 from './Components/Practise5';
import Practise6 from './Components/Practise6';  
import Practise_C from './Components/Practise_C';  
import Board from './Components/Board/Board' ;
import Chat_Details from './Components/Chat/Chat_Details';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Create_Chat from './Components/Chat/Create_Chat';
import Footer from './Components/Footer';
import styles from './index.css';
import axios from 'axios';


class App extends Component{

   

render(){ 

return(
  <BrowserRouter>

<div className='container'> 

  <Menu />

  <Grid columns ={3}>
<Grid.Column width ={3}>
<NavBar />

</Grid.Column>

<Grid.Column width ={10}>

<Route path='/Landing' component={Landing} />
<Route path='/Practise_C' component={Practise_C} />
<Route path='/Practise' component={Practise} />
<Route path='/Practise2' component={Practise2} />
<Route path='/Practise3' component={Practise3} />
<Route path='/Practise4' component={Practise4} />
<Route path='/Practise5' component={Practise5} />
<Route path='/Practise6' component={Practise6} />
<Route path='/Board/Board' component={Board} />
<Route path='/Chat_Details/:id' component={Chat_Details} />
<Route path='/Auth/SignIn' component={SignIn} />
<Route path='/Auth/SignUp' component={SignUp} />
<Route path='/Chat/Create_Chat' component={Create_Chat} />

</Grid.Column>
<Grid.Column width ={3}>

<Nav2 />

</Grid.Column>
  </Grid> 

  <Footer />
</div>

</BrowserRouter>

);
}
}

export default App;  
