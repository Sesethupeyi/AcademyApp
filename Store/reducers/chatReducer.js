const initState = {
  Chaat : [
    {id: '1', name: 'help me wiht trig', chAt:'aytdtc vytc uu'},
    {id: '2', name: 'help me wiht func', chAt:'aytctt tfytvu y'},
    {id: '3', name: 'help finance', chAt:'rdc ctvv'}
  ]
}

const chatReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_CHAT' :
       console.log('created chatsssssssss!!!', action.chat );
       return state;

       case 'CREATE_PROJECT_ERROR' :
          console.log('created project error !!', action.err ); 
          return state;

        default:
          return state;  
  }

}

export default chatReducer 