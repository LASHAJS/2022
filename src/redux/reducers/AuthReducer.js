const initialState = {
    userData: null,
    isLoading: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-IS-LOADING":
            return {
                ...state,
                isLoading: action.payload
            }
        case "SET-USER-DATA":
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
}

export const setIsLoading = (payload) => ({type: "SET-IS-LOADING", payload})
export const setUserData = (payload) => ({type: "SET-USER-DATA", payload})


export const AuthUser = (userData) => {
    return dispatch => {
        try{
            dispatch(setIsLoading(true))
            localStorage.setItem("jwt", "token")
            dispatch(setUserData(userData))
            dispatch(setIsLoading(false))

        }catch (e){
            console.log(e)
        }
    }
}

export const logOutUser = () => {
    return dispatch => {
        try{
            dispatch(setIsLoading(true))
            localStorage.removeItem("jwt")
            dispatch(setIsLoading(false))

        }catch (e){
            console.log(e)
        }
    }
}
