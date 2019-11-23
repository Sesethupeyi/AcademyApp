import React from 'react';
import {List, Image } from 'semantic-ui-react';
import moment from 'moment'

const Chat_Summary  = ({chaat}) =>{
  return (
<div>

<List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
      <List.Content>
        <List.Header as='a'>{chaat.name}</List.Header>
        <List.Description>{chaat.chat}</List.Description>
        <List.Description>{moment(chaat.time.toDate()).calendar()}</List.Description>

      </List.Content>
    </List.Item>
  
  </div>

  )

}
 export default Chat_Summary