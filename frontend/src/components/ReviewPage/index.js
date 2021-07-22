import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Review.css";
import * as sessionActions from '../../store/session';
import { createReview } from "../../store/review";
import { useParams } from "react-router-dom";

function ReviewPage({bathroom}){
    const { id } = useParams();  // because we have :id in url
    const bathroomId = id;
    const dispatch = useDispatch();
    let history = useHistory();
    const [ reviewText, setReviewText ] = useState("");
    const [ rating, setRating ] = useState("");
    const [ reviewImgUrl, setReviewImgUrl ] = useState("");
    const [errors, setErrors ] = useState([]);
    //const reviewerId = useSelector((state) => state.session.user.id); // i don't care if they are logged  in
    //const bathroomId = useSelector((state) => state.session.bathroom.id)
    //const bathroomId = useSelector(state => state.bathroom.id)
    const bathroomToReview = useSelector(state => state.bathroom.singleBathroom)
    const user = useSelector(state => state.session.user)  || []; // object w/all the properties
    //On submit of the form, dispatch the create review action with the form input values. Make sure to handle and display errors from the thunk action if there are any.
    const handleSubmit = (e) => {
        // e.preventDefault();
        setErrors([]);
        dispatch(createReview({ reviewerId: user.id, bathroomId, reviewText, rating, reviewImgUrl }))
            // .then(async (res) => {
            //     const data = await res.json();
            //     if (data && data.errors) setErrors(data.errors)
            // });
            history.push(`/bathroom/${id}`)
    }

    return (
        <>
          <div className="review-container">
            <div className="review-form-container">
                <h1>Review</h1>
                <div>{bathroomToReview.title} </div>

            </div>

            <div className="lower-container">

                <form className="review-form"
                  onSubmit={handleSubmit}
                  >
                    <ul>
                      {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>

                    <div className="form-input">
                      {/* <label> */}
                          {/* Description: */}
                          <input
                          style={{width:"450px"}}
                          type="text"
                          placeholder="How was this bathroom?"
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

                  {/* <div className="form-input">

                          <input
                          style={{width:"450px"}}
                          type="text"
                          placeholder="Photo url (optional)"
                          value={reviewImgUrl}
                          onChange={(e) => setReviewImgUrl(e.target.value)}
                          required
                          />
                  </div> */}

                  <div className="submit-review-btn">
                    <button className="submit-review-button" disabled={!user} type="submit">Submit Review</button>
                  </div>
                  <div className="not-logged-in">
                    <h3>Not logged in?</h3>
                  </div>

                  <div className="login-new-bathroom-button">
                    <button className="new-bathroom-login" type="submit" onClick={() => history.push('/')}>Log in</button>
                  </div>
                  {/* <Link to="/" className="login-link">Log in</Link> */}
              </form>
              <div className="bathroom-review-image">
                  <img className= "bathroom-review-img" src={`${bathroomToReview.bathroomImgUrl}`} alt="bathroom image"/>
                </div>
            </div>
          </div>
        </>

    )
}

export default ReviewPage;
