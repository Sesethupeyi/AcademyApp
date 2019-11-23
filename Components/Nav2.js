import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom'

const Nav2 =()=>{  
return(

<div>
<Menu vertical>
 
 
      <Menu.Item><Link to="/board/board">Ask for Help</Link></Menu.Item>        
    
</Menu>
</div>

)

}

export default Nav2