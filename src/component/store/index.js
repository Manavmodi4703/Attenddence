import { createStore } from "redux"


const initialState = {
   users: []
};

const reducer = (state = initialState,action) =>{
  switch(action.type){
    case "ADD_STUDENT":
      return{
        ...state,
        users:[...state.users , action.payload]
      }
      default:
        return state;
  }
  
}

export default createStore

