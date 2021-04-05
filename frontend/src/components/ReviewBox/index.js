function ReviewBox (){

    // rating reduce finish help
    return (
        <>
            <h1>
                <i class="fas fa-star" style={{color:"pink"}}></i>

                {bathroom.Reviews.rating.reduce((accum, value) => accum + value

                    )}
                Review
            </h1>

            <div className= "review-container">

                <div className="reviewer-first-name-last-inital">{bathroom.Reviews.map(review => (
                                <div>
                                    Review by: {review.User.firstName} {review.User.lastName[0]}.
                                </div>
                            ))}
                </div>

                <div className="reviewer-text" style={{marginTop:"10px", marginBottom:"10px"}}>{bathroom.Reviews.map(review => (
                    <div>
                        Review: {review.reviewText}
                    </div>
                ))}
                </div>

                <div className="reviewer-rating">{bathroom.Reviews.map(review => (
                    <div>
                        Review: {review.rating}
                    </div>
                ))}
                </div>
            </div>

        </>
    )
}
export default ReviewBox;
