import { Link } from "react-router-dom";
import './FeedPage.css';

function ResultTile( {bathroom} ){
    return (
        <>
            <div className="result-tile-container">

                <div className="result-text-container">
                    <div>
                        <Link to="/bathroom">{bathroom.title}</Link>
                    </div>

                    <div>
                        {bathroom.city}, {bathroom.state}
                    </div>


                    <div>
                        {bathroom.description}
                    </div>


                </div>

                <div className="bathroom-tile-image">
                    <img src={`${bathroom.bathroomImgUrl}`} alt="bathroom pic"/>
                </div>

            </div>

        </>
    )
}

export default ResultTile;
