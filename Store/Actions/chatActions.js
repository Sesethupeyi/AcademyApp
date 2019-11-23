
export const createChat = (chat) => {
   return (dispatch, getState, { getFirebase, getFirestore}) => {

 const help = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;

    help.collection('chats').add({
     ...chat,
         chat: profile.firstName,
         name:profile.lastName,
         authId: authId, 
         time: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_CHAT', chat  });
    }).catch((err) =>{
      dispatch({type: 'CREATE_PROJECT_ERROR', err });
    })
   }
}