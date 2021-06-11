//import { csrfFetch } from './csrf';
const LOAD = 'search/LOAD';
const load = list => ({
    type: LOAD,
    list,   //payload     key:
});

//THUNK the good one.
export const getSearch = (param) => async dispatch => {
    const response = await fetch(`/api/search/${param}`);
    if(response.ok){
        const list = await response.json();  //this var name!
        dispatch(load(list))
        return list         //searches
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
