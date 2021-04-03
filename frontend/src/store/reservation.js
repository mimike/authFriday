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
    return dispatch(setRes(response))
}
//get thunk
// export const getReservation = () => async(dispatch) => {
//     const response = await csrf("api/reservation/id", {
//         method: "GET",
//         body: JSON.stringify()
//     })
// }

//THUNKGet res by reserverId
export const getReservation = () => async (dispatch) => {
    const response = await csrf(`api/reservation/${reserverId}`)
    if (response.ok){
        const data= await response.json();
        return dispatch(getRes(data))
    }
}

const reservationReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case SET_RESERVATION:
        newState = action.payload;
        newState= Object.assign({}, state);   //SHALLOW copy, mutates it.
        for (let i= 0; i < action.payload.length; i++){
            let key= array[i].id;
            newState[key] = array[i]
        }
        return newState;

        default:
            return state;
    }}
export default reservationReducer;
