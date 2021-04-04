import { Link } from "react-router-dom";
import "./BathroomPage.css"
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";


function BathroomTile( {bathroom} ){
    let history = useHistory();
// useEffect (() => {
//     console.log("baaaathrile", bathroom)
// }, [])
    let bathroomLink = () => {
        history.push(`/bathroom/${bathroom.id}`)
    }
    return (

        <div>
            <div className="text-tile">

            <a href={`/bathroom/${bathroom.id}`} id="bathroom-link">{bathroom.title}</a>

                <div className="location-result">
                    {bathroom.city}, {bathroom.state}
                    <div>
                        {bathroom.description}
                    </div>
                </div>
           </div>

            <div className="bathroom-tile-image">
                <img src={`${bathroom.bathroomImgUrl}`} alt="bathroom pic"/>
            </div>



        </div>
    )
}
export default BathroomTile;
 {/* <div className="title-result">
                    <Link to={`/bathroom/${bathroom.id}`}/>
                </div> */}
