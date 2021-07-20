import "./SingleResult.css"
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../Footer"

function SingleResultTile ( {bathroom}){
    let history = useHistory();
    if(!bathroom.Reviews){   //guard clause
        return null;
    }
    return (
        <>
            <div className="result-tile-container">
                <div className="bathroom-tile-image">
                        <img src={`${bathroom.bathroomImgUrl}`} alt="bathroom pic"/>
                </div>

                <div className="result-text-container">

                    <div className="location-type-result" style={{color:"grey"}}>
                        {bathroom.locationType}
                    </div>

                    <div className="title-result">

                        <Link to={`/bathroom/${bathroom.id}`}>{bathroom.title}</Link>
                    </div>

                    <div className="city-state-result">
                        {bathroom.city}, {bathroom.state}
                    </div>

                    <div className="description-result">
                        <p>{bathroom.description}</p>
                    </div>

                    <div className="cost-result">
                        <p>${bathroom.costPerDay} / day </p>
                    </div>

                    <a href={`/review/${bathroom.id}`} style={{textDecoration:"none"}}>Rate this Loo</a>
                     {/* <div className="reviews-container">
                        <p>Reviews:</p>
                    </div> */}
                 </div>
            </div>

            <div className= "review-container">
                <h1>
                    <i class="fas fa-star" style={{color:"pink", margin:"20px"}}></i>
                    <span>Reviews</span>

                    {/* {
                        bathroom.Reviews.map(rating => {

                    })

                    } */}
                </h1>


                <div className="reviewer-first-name-last-inital">{bathroom.Reviews.map(review => (
                                <div>
                                    <div
                                    style={{margin:"20px", fontWeight:"bold"}}>
                                    {review.User.firstName} {review.User.lastName[0]}.
                                    </div>

                                   <div style={{margin:"20px"}}>
                                    {review.reviewText}
                                   </div>

                                   <div style={{margin:"20px"}}>
                                   Rating: {review.rating} / 5
                                   </div>

                                   <div style={{margin:"20px"}}>
                                   {review.createdAt.toString().slice(0,10)}
                                   </div>




                                </div>
                            ))}
                </div>
                <div>

                    

                </div>


                {/* <div className="reviewer-text" style={{marginTop:"10px", marginBottom:"10px"}}>{bathroom.Reviews.map(review => (
                    <div>
                        Review: {review.reviewText}
                    </div>
                ))}
                </div>

                <div className="reviewer-rating">{bathroom.Reviews.map(review => (
                    <div>
                        Rating: {review.rating} / 5
                    </div>
                ))}
                </div> */}

                {/* <div className="reviewer-date" style={{marginTop:"10px", marginBottom:"10px"}}>{bathroom.Reviews.map(review => (
                    <div>
                        {review.createdAt.toString().slice(0,10)}
                    </div>
                ))}
                </div> */}


            </div>
        </>
    )
}

export default SingleResultTile;
