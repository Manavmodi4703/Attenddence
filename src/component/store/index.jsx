import React from 'react'

const Store = () => {
  const initialState = {
    student:[]
  }
  const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_STUDENT" :
            return{
                ...student,
                student:[...state.student , action.payload]
            }
    }


  }
}

export default Store
