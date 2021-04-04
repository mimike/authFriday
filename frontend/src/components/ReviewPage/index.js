//Review a bathroom. Anyone logged in can review a bathroom, u do not need to have booked it.

//the review button will live on the bathroom tile of each bathroom. users will click the button on that bathroom tile and takes u to this review page.
//import css file
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as sessionActions from '../../store/session';

function ReviewPage(){
    const dispatch = useDispatch();
    let history = useHistory();
    const [ reviewText, setReviewText ] = useState("");
    const [ rating, setRating ] = useState("");
    const [ reviewImgUrl, setReviewImgUrl ] = useState("");
    const [errors, setErrors ] = useState([]);

    //On submit of the form, dispatch the login thunk action with the form input values. Make sure to handle and display errors from the login thunk action if there are any.

    //line 21, change.
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors([]);
    //     return dispatch(sessionActions.login({ credential, password }))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             if (data && data.errors) setErrors(data.errors)
    //         });
    // }

    return (
        <>
        <div className="review-form-container">
            <h1>Review</h1>
        </div>

        <form className="reviewform"
              // onSubmit={handleSubmit}
              >
                {/* <ul>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}

                <div className="form-input">
                  {/* <label> */}
                      {/* Description: */}
                      <input
                      style={{width:"450px"}}
                      type="text"
                      placeholder="Review of Loo"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      required
                      />
                  {/* </label> */}
                </div>

                <div className="form-input">
                  {/* <label> */}
                      {/* Address: */}
                      <input
                      style={{width:"450px"}}
                      type="text"
                      placeholder= "Rating 1 - 5"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      required
                      />
                  {/* </label> */}
                </div>

              <div className="form-input">
                  {/* <label> */}
                      {/* Add a photo: */}
                      <input
                      style={{width:"450px"}}
                      type="text"
                      placeholder="Review photo url here"
                      value={reviewImgUrl}
                      onChange={(e) => setReviewImgUrl(e.target.value)}
                      required
                      />
                  {/* </label> */}
              </div>

              <div className="submit-review-btn">
                <button className="submit-review-button" type="submit">Submit Loo Review</button>
              </div>

              <h3>Not logged in?</h3>

              <div className="login-new-bathroom-button">
                <button className="ugh2" type="submit" onClick={() => history.push('/')}>log in!</button>
              </div>

              {/* <Link to="/" className="login-link">Log in</Link> */}
              </form>

        </>

    )
}

export default ReviewPage;
