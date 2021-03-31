import { csrfFetch } from './csrf';

const LOAD = 'search/LOAD';

const load = list => ({
    type: LOAD,
    list,   //payload
});

//THUNK
export const getSearch = (param) => async dispatch => {
    const response = await fetch(`/api/search/${param}`);
    if(response.ok){
        const list = await response.json();  //this var name!
        dispatch(load(list))
        return list
    }
}

const initialState = {
    search: []
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD: {
            return { ...state, search: [ ...action.list]}
        }
        default:
            return state
    }
}

//REDUCER
export default searchReducer;
