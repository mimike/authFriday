import { Link } from "react-router-dom";
import "./BathroomPage.css"
import { useEffect } from 'react';

function BathroomTile( {bathroom} ){
// useEffect (() => {
//     console.log("baaaathrile", bathroom)
// }, [])

    return (

        <div>

            <div className="text-tile">
                <div className="title-result">
                    <Link to={`/bathroom/${bathroom.id}`}>{bathroom.title}</Link>

                    {/* <Link to={`/bathroom/${bathroom.id}`}/> */}
                </div>

                <div>
                    {bathroom.address}
                </div>

                <div>
                    {bathroom.description}
                </div>
            </div>

            <div className="bathroom-tile-image">
                <img src={`${bathroom.bathroomImgUrl}`} alt="bathroom pic"/>
            </div>
        </div>
    )
}
export default BathroomTile;
