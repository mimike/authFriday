import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {  //makes an ob
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
//SIGNUP THUNK ACTION
export const signup = (user) => async (dispatch) => {

    const { username, firstName, lastName, email, address, city, state, password } = user;
    const response = await csrfFetch("/api/users", {  //here is a unique fetch handl
      method: "POST",
      body: JSON.stringify({
        username,
        firstName,
        lastName,
        email,
        address,
        city,
        state,
        password,
      }),
    });
    const data = await response.json();  // parse pojo USER data
    dispatch(setUser(data.user)); //
    return response;
  };

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {   //here
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const demoLogin = () => async (dispatch) => {
  //console.log("asdfdsafdfa")
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential: "Bart-Dorsey",
      password: "password"
    }),
  })
  const data = await response.json()
  dispatch(setUser(data.user));   //post route from api session.js
  return response;
}

const initialState = { user: null };
//useselector is subscribing to the store whenever the store changes, getting the state out , whne the user changes
//reducer is just the slice ??
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:  // if set_user is the type
      newState = Object.assign({}, state);  //glues all the stuff and then add the new state. or do ...state
      newState.user = action.payload;
      return newState;  // this is what triggers the rendering!
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');  //fetch vs csrfFetch???
    const data = await response.json();
    dispatch(setUser(data.user));
    return response
}

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  };

export default sessionReducer;
