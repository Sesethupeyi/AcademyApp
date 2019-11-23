import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom'

const NavBar =()=>{  
return(

<div>
<Menu vertical>
 
   <Menu.Item ><Link to="/landing">Home</Link></Menu.Item>
          <Menu.Item><Link to="/practise_c">Courses</Link></Menu.Item>
        
    
</Menu>
</div>

)

}

export default NavBar