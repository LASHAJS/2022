const initialState = {
    Token:null,
}

export const authReducer = ( state= initialState,action) => {
    switch(action.type){
        case "set-Auth":
            return {
                ...state,
                Token:action.payload,
            }
     
                default:return state;
    }
}

export const setTokenAC = (payload) => ({type :"set-Auth",payload})

