import React, {Component} from  'react';
import {Container,Header, Image, Grid } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import trig from './images/Trigonometry.jpg';
import calc from './images/Calculus.jpg';
import alg from './images/Algebra.jpg';
import poly from './images/Cubic.jpg';
import Modal from './Modal';
import Practise from './Practise';
import Practise2 from './Practise2';
import Practise3 from './Practise3';
import Practise4 from './Practise4';
import Practise5 from './Practise5';
import Practise6 from './Practise6';
import analyt from './images/Analytical.jpg';
import styles from './style.css';
import Ser from './images/Sequence and Series.jpg'


class Practise_C extends Component {

render(){

return(
    <BrowserRouter>
    <div >
      <div className='courses'> <Header as='h1'>Courses</Header> </div>
 
  <div className='practise'>

 
  <Practise2 /> 

  <Practise /> 

  <Practise3 /> 
  <Practise4 /> 
  <Practise5 /> 
  <Practise6 />

  </div>
  
  <br />
  <br />
  
    </div>
    </BrowserRouter>
)

}

}
export default Practise_C;