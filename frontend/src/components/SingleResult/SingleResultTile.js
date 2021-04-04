import "./SingleResult.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SingleResultTile ( {bathroom}){
    let history = useHistory();
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

                    <a href="/review" style={{textDecoration:"none"}}>Review this Loo</a>
                    {/* <div className="reviews-container">
                        <p>Reviews:</p>
                    </div> */}





                </div>
            </div>

        </>
    )
}



export default SingleResultTile;
