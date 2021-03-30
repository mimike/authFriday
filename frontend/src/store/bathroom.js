// //## Bathroom Route
// // - `/bathroom`
// // - **GET** getting a list of bathrooms
// // - **POST** create a new bathroom
// import { csrfFetch } from 'react-redux'
// import csrfFetch from "./csrf";
// //import { useDispatch } from

// const LOAD = 'bathroom/LOAD';
// //const SET_BATHROOMS = 'bathroom/SET_BATHROOMS' take the bathrooms and set them into the state.
// const ADD_BATHROOMS = 'bathrooms/ADD_BATHROOMS';  // bathroom/ADD

// const load = (list) => ({
//     type= LOAD,
//     list
// })
// //ACIONS
// // export const setBathrooms = (bathrooms) => {
// //     return {
// //         type: SET_BATHROOMS,
// //         payload: bathrooms
// //     }
// // }

// //ACTIONS
// export const addBathroom = (bathroom) => {
//     return {
//         type: ADD_BATHROOMS,
//         payload: bathroom
//     }
// }

// //THUNKS ASYNC ACTIONS
// export const getBathrooms = () => async(dispatch) => { //set
//     const response = await csrfFetch('/api/bathroom');
//     if(response.ok) {
//         const list = await response.json();
//         dispatch(load(list));  // why dont need to invoke dispatch, because it's return?
//     } else {
//         throw response; // if(!response.ok) throw response
//     }

//     const bathrooms = await response.json(); // returning batrooms DATA json p
//     dispatch(setBathrooms(bathrooms));
// }
// //REDUCER
// const initialState = {  //what do we want it to look like
//     list: [] // id, description, title, etc.
// }

// const bathroomReducer = (state = initialState, action) => {  //state is bathrooms (slice)
//     switch(action.type){
//         case LOAD: {
//             const allBathrooms = {};
//             action.list.forEach((bathroom) => {
//                 allBathrooms[bathroom.id] = bathroom
//             });

//             return {
//                 ...allBathrooms,
//                 ...state,
//             }

//         }

//         //bart's code...
//         case SET_BATHROOMS:
//             const bathrooms = action.payload;
//             const newBathrooms = {};

//             for(const bathroom of bathrooms) {  // bathrooms action.payload?
//                 newBathrooms[bathroom.id] = bathroom; // doens't mutate. forEach would more expensive?
//             }
//             //////////////

//         case ADD_BATHROOMS:
//             return state;
//         default:
//             return state; //bathrooms
//     }
// }
// export default bathroomReducer;
