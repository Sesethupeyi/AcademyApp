import React from 'react';
import Chat_Summary from './Chat_Summary';
import {List, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const Chat_List = ({Chat}) => {

   return(
   <div>
    { Chat && Chat.map(chaat => { 
        return( 
           <Link to={'/Chat_Details/' + chaat.id } key={chaat.id}> 
            <Chat_Summary chaat={chaat}  />
          </Link>  
        )
    })}

   </div>

   )

}
export default Chat_List