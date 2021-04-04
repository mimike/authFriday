import { Link } from "react-router-dom";
import './FeedPage.css';
import { useHistory } from "react-router-dom";
import "../BathroomPage/BathroomPage.css"

function ResultTile( {bathroom} ){
    const history = useHistory();
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
                        {/* <Link to="/bathroom">{bathroom.title}</Link> */}
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

                    {/* <div className="review-loo btn">
                        <button className="review-loo-button" style={{color:"blue"}}type="button" onClick={() => history.push('/review')}>Review this Loo</button>
                    </div> */}

                    

                </div>
            </div>

        </>
    )
}

export default ResultTile;
