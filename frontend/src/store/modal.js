const SHOW_SIGNUP = "modal/SHOW_SIGNUP"
const HIDE_SIGNUP = "modal/HIDE_SIGNUP"
const SHOW_LOGIN = "modal/SHOW_LOGIN"
const HIDE_LOGIN = "modal/HIDE_LOGIN"

export const showSignup = () => ({
    type: SHOW_SIGNUP,
})

export const hideSignup = () => ({
    type: HIDE_SIGNUP,
})

export const showLogin = () => ({
    type: SHOW_LOGIN,
})

export const hideLogin= () => ({
    type: HIDE_LOGIN,
})

const initialState = {
    showSignup: false,
    showLogin: false
}

export default function modalReducer(state = initialState, action){
    switch(action.type){
        case SHOW_LOGIN:
            return {
                ...state, showLogin: true
            }
        case SHOW_SIGNUP:
            return {
                ...state, showSignup: true
            }
        case HIDE_LOGIN:
            return {
                ...state,
                showLogin: false
            }
        case HIDE_SIGNUP:
            return {
                ...state,
                showSignup: false
            }
        default:
            return state
    }
}
