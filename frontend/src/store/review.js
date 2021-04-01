// const SET_REVIEWS = 'reviews/SET_REVIEWS';
// const load = list => ({
//     type: SET_REVIEWS,
//     list,   //payload     key:
// });

// //ACTIONS
// export const setReview = (reviews) => ({

//             type: SET_REVIEWS,
//             payload: reviews
//     })

// //SIGNUP THUNK ACTION
// export const createReview = (user) => async (dispatch) => {

//     const { reviewerId, bathroomId, reviewText, reviewerImgUrl} = review
//     const response = await csrfFetch("/api/review", {  //here is a unique fetch handlr
//       method: "POST",
//       body: JSON.stringify({
//         reviewerId,
//         bathroomId,
//         reviewText,
//         reviewerImgUrl
//       }),
//     });
//     const data = await response.json();  // parse pojo USER data
//     dispatch(setUser(data.review)); //
//     return response;
//   };
