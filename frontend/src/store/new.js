//SIGNUP THUNK ACTION
// export const addNew = (newBathroom) => async (dispatch) => {

//     const { ownerId, title, description, address, city, state, costPerDay, locationType, bathroomImgUrl } = newBathroom;
//     const response = await csrfFetch("/api/users", {  //here is a unique fetch handl ???
//       method: "POST",
//       body: JSON.stringify({
//         ownerId,
//         title,
//         description,
//         address,
//         city,
//         state,
//         costPerDay,
//         locationType,
//         bathroomImgUrl
//       }),
//     });
//     const data = await response.json();  // parse pojo newBathroom data
//     dispatch(setUser(data.newBathroom)); //
//     return response;
//   };
