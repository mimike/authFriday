//## Bathroom Route
// - `/bathroom`
// - **GET** getting a list of bathrooms
// - **POST** create a new bathroom

import csrfFetch from "./csrf";

//const LOAD = 'bathroom/LOAD';
const SET_BATHROOMS = 'bathroom/SET_BATHROOMS' //take the bathrooms and set them into the state.
const ADD_BATHROOMS = 'bathrooms/ADD_BATHROOMS';  // bathroom/ADD

//ACTIONS
export const setBathrooms = (bathrooms) => ({
//return {} extra yellow parenthesis
        type: SET_BATHROOMS,
        payload: bathrooms
})

// edit this later. wednesday night
export const addBathroom = (bathroom) => {
    return {
        type: ADD_BATHROOMS,
        payload: bathroom
    }
}
//THUNKS ASYNC ACTIONS
//gets a list of all the bathrms
export const getBathrooms = () => async(dispatch) => { //set
    const response = await csrfFetch('/api/bathroom');
    if(response.ok) {
        const list = await response.json();
        dispatch(setBathrooms(list));
    } else {
        throw response;
    }

    // const bathrooms = await response.json(); // returning batrooms DATA json p
    // dispatch(setBathrooms(bathrooms));
}

//get single bathroom (was getBathroomsSearch)
export const getSingleBathroom = (bathroom) => async dispatch => {   //get single bathroom
    const response = await csrfFetch(`/api/bathroom/${bathroom}`);
    if(response.ok){
        const bathrooms = await response.json();
        dispatch(SET_BATHROOMS(bathrooms))
        return bathrooms;
    }
}

//REDUCER
const initialState = {  //what do we want it to look like
    list: {} // id, description, title, etc.
}

const bathroomReducer = (state = initialState, action) => {  //state is bathrooms (slice)
    switch(action.type){

        case SET_BATHROOMS:
            const bathrooms = action.payload;
            const newBathrooms = {};

            for(const bathroom of bathrooms) {  // bathrooms action.payload?
                newBathrooms[bathroom.id] = bathroom; // doens't mutate. forEach would more expensive?
            }
            return newBathrooms;

        case ADD_BATHROOMS:
            return state;
        default:
            return state; //bathrooms
    }
}


export default bathroomReducer;
