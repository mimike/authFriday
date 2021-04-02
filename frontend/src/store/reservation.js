
import csrfFetch, {csrf} from './csrf';

const SET_RESERVATION = "reservation/SET_RESERVATION";
const GET_RESERVATION = "reservation/GET_RESERVATION"

const setRes = ( reserverId, bathroomId) => ({
    type: SET_RESERVATION,
    payload: { reserverId, bathroomId }   // do u destruc
});
const getRes = (reserverId) => ({
    type: GET_RESERVATION,
    reserverId
})

//THUNKS ASYNC ACTIONS
export const setReservation = () => async(dispatch) => {
    const response = await csrfFetch("/api/reservation", {
        method: "POST",
        body: JSON.stringify({
            bathroomId,
            reserverId
        })
    })
}


export const getReservation = () => async(dispatch) => {
    const response = await csrf("api/reservation/id", {
        method: "GET",
        body: JSON.stringify()
    })
}
const reservationReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_RESERVATION:
        newState = action.payload;
        return newState;

        default:
            return state;
    }}
export default reservationReducer;
