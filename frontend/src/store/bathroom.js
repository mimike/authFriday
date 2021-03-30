//## Bathroom Route
// - `/bathroom`
// - **GET** getting a list of bathrooms
// - **POST** create a new bathroom
import { csrfFetch } from 'react-redux'
import csrfFetch from "./csrf";
//import { useDispatch } from

const LOAD = 'bathroom/LOAD';

const load = (list) => ({
    type= LOAD,
    list
})

const initialState = {
    list: []
}

export const getBathrooms = () => async(dispatch) => {
    const response = await csrfFetch('/api/bathroom');
    if(response.ok) {
        const list = await response.json();
        dispatch(load(list));  // why no need to invoke dispatch, because it's return.
    }
}
const bathroomReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD: {
            const allBathrooms = {};
            action.list.forEach((bathroom) => {
                allBathrooms[bathroom.id] = bathroom
            });
            return {
                ...allBathrooms,
                ...state,
            }

        }
        default:
            return state;
    }
}
export default bathroomReducer;
