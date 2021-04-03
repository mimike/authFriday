import csrfFetch from "./csrf";

const GET_REVIEWS = "reviews/GET_REVIEWS";   // GET
const SET_REVIEW = 'reviews/SET_REVIEWS';   // POST (add)
//const EDIT_REVIEW = 'reviews/EDIT_REVIEW'                                // PATCH (edit)

//ACTION


//ACTION are not exported!
const getReviews = list => ({
    type: GET_REVIEWS,
    list,
    // if you re just retrieving or doing a get, convention might be to not include payload: list.
});

//ACTION
const setReview = (reviews) => ({  //post
        type: SET_REVIEW,
        payload: reviews
        //payload, hey you're sending something.
    })

//SIGNUP THUNK ACTION
export const createReview = (review) => async (dispatch) => {

    const { reviewerId, bathroomId, reviewText, reviewerImgUrl} = review
    const response = await csrfFetch("/api/review", {  //here is a unique fetch handlr
      method: "POST",
      body: JSON.stringify({
        reviewerId,
        bathroomId,
        reviewText,
        reviewerImgUrl
      }),
    });

    if(response.ok){  // if ur getting something back
        const data = await response.json()
        dispatch(setReview(data));
        return data;  // where do u return and nec?
    }


  };



export const loadReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`);

    if (response.ok) {
      const reviews = await response.json();
      dispatch(getReviews(reviews));
      return reviews;
    }
  }
const initialState = {};

const reviewReducer = (state = initialState, action) => {  //state is bathrooms (slice)
    switch(action.type){

        case SET_REVIEW:
            const reviews = action.list;   //instead of payload ^
            const somethingReviews = {};

            for(const review of reviews) {
                somethingReviews[review.id] = reviews;
            }
            return somethingReviews;

        case GET_REVIEWS:
            const allReviews = {};
            action.list.forEach( (review) => {    // through the array, for each review in the list of review, we're creatin key valie pairs in the empty allReviews object. and return after u loop through the arry.
                allReviews[review.id] = review;
            })
            return allReviews;

            // return state;
        default:
            return state; //reviews
    }
}
export default reviewReducer;
// export const loadReviews = () => async (dispatch) => {    //get all review
//     const response = await csrfFetch("api/review");

//     if(response.ok){
//         const data = await response.json();
//         dispatch(getReviews(data))
//         return data;     // what do u return
//     }
// }
