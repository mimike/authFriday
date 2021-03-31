import { Link } from "react-router-dom";

function ResultTile( {bathroom} ){

    return (
        <>
            <div className="result-tile-container">
                <div>
                    <Link to="/bathroom">{bathroom.title}</Link>
                </div>

                <div>
                    {bathroom.city}, {bathroom.state}
                </div>


                <div>
                    {bathroom.description}
                </div>

                <div className="random-toilet-image">
                    <img src="/images/unko6.jpg" alt="toilet"/>
                </div>
                
            </div>

        </>
    )
}

export default ResultTile;
