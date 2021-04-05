//## Bathroom Route
// - `/bathroom`
// - **GET** getting a list of bathrooms
// - **POST** create a new bathroom
import csrfFetch from "./csrf";

//const LOAD = 'bathroom/LOAD';
const SET_BATHROOMS = 'bathroom/SET_BATHROOMS' //take the bathrooms and set them into the state.
const ADD_BATHROOM = 'bathrooms/ADD_BATHROOMS';  // bathroom/ADD
const GET_BATHROOM = 'bathrooms/GET_BATHROOM;' //plural?!

//ACTIONS
export const setBathrooms = (bathrooms) => ({
//return {} extra yellow parenthesis
        type: SET_BATHROOMS,
        payload: bathrooms

})

// edit this later. wednesday night  //post
export const addBathroom = (bathroom) => {
    return {
        type: ADD_BATHROOM,
        payload: bathroom
    }
}


export const getBathroom = (bathroom) => {  //get
    return {
        type: GET_BATHROOM,
        payload: bathroom
    }
}
//THUNKS ASYNC ACTIONS  need add bathroom thunk
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
export const getSingleBathroom = (bathroomId) => async dispatch => {   //get single bathroom
    const response = await csrfFetch(`/api/bathroom/${bathroomId}`);
    if(response.ok){
        const bathroom = await response.json();
        dispatch(getBathroom(bathroom))
        return bathroom;
    }
}
//THUNK ACTION
export const createBathroom = (bathroom) => async(dispatch) => { //POST
    const { ownerId, title, description, address, city, state, costPerDay, locationType, bathroomImgUrl } = bathroom

    const response = await csrfFetch("/api/bathroom/create", {
        method: "POST",
        body: JSON.stringify({
            ownerId,
            title,
            description,
            address,
            city,
            state,
            costPerDay,
            locationType,
            bathroomImgUrl
        }),
    });
    const data = await response.json();  // parse pojo USER data
    dispatch(addBathroom(data.bathroom));
    return response;

}

//REDUCER
const initialState = {  //what do we want it to look like
    list: {}, // id, description, title, city, state, etc.
    singleBathroom: {}  // why did we set this one  to empty obj
}

const bathroomReducer = (state = initialState, action) => {  //state is bathrooms (slice)
    let newState;
    switch(action.type){

        case SET_BATHROOMS:
            const bathrooms = action.payload;
            const setNewStateBathrooms = Object.assign({}, state)              //{4, description, etc}
            setNewStateBathrooms.test = [];
            for(const bathroom of bathrooms) {  // bathrooms action.payload?
                setNewStateBathrooms.list[bathroom.id] = bathroom; // doens't mutate. forEach takes up more memory
                setNewStateBathrooms.test.push(bathroom)
            }
            return setNewStateBathrooms;

        case ADD_BATHROOM:
            newState = [ state, action.addBathroom]
            return newState;
        case GET_BATHROOM: //need to finish this.
            const bathroom = action.payload;
            //create a copy a of the old state
            const newStateBathroom = Object.assign( {}, state)   // passing in new empty and old state
            newStateBathroom.singleBathroom = bathroom;  // old state, singleBr property gets over written after new state gets returned

            return newStateBathroom;
        default:
            return state; //bathrooms
    }
}


export default bathroomReducer;
