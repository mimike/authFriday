//import { csrfFetch } from './csrf';
const LOAD = 'search/LOAD';
const load = list => ({
    type: LOAD,
    list,   //payload     key:
});

//THUNK
export const getSearch = (param) => async dispatch => {
    const response = await fetch(`/api/search/${param}`);
    if(response.ok){
        const list = await response.json();  //this var name!
        dispatch(load(list))
        return list         //searchres
    }
}

//get single bathroom when u click on it...
export const getBathroom = (param) => async dispatch => {
    const response = await (`/api/bathroom/${param}`);
    if(response.ok){
        const bathroomData = await response.json();
        dispatch(load(bathroomData))
        return bathroomData;
    }
}


const searchReducer = (state = [], action) => {
    switch(action.type){
        case LOAD:
        const newState = action.list;  // []  we don't need past search   load.list?
        return newState;

        default:
            return state;
    }
}
//REDUCER
export default searchReducer;
