//THIS PAGE WILL output the search results by city.
//import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { getSearch } from '../../store/search';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";


//import BathroomTile from "../BathroomPage/BathroomTile"
import ResultTile from "./ResultTile";

function FeedPage(){
    let history = useHistory();
    const {value} = useParams();
    const dispatch = useDispatch();
    //const [ keyword, setKeyword ] = useState();
    const bathroomsInCity = useSelector(state => state.search.bathrooms) || [];  //bathrmReducer
    // const arrayBath = Object.values(bathroomsInCity);


    useEffect(() => {
        dispatch(getSearch(value));
    }, [dispatch])

    const mappedBathrooms = bathroomsInCity.map(bathroom => (

            <ResultTile bathroom={bathroom} key={bathroom.id}/>

    ))
        return (
        <ul>
            <div className="feed-container">
                <h1>Search Result</h1>
            </div>

            <div>
                <div>
            <button className="nav-button" style={{color:"green"}} type="button" onClick={() => history.push('/new')}>Share</button>
           </div>
                {mappedBathrooms}
            </div>
        </ul>
    );
}
export default FeedPage;








//    function initMap(): void {
//         // The location of Uluru
//         const uluru = { lat: -25.344, lng: 131.036 };
//         // The map, centered at Uluru
//         const map = new google.maps.Map(
//           document.getElementById("map") as HTMLElement,
//           {
//             zoom: 4,
//             center: uluru,
//           }
//         );
//         // The marker, positioned at Uluru
//         const marker = new google.maps.Marker({
//           position: uluru,
//           map: map,
//         });
//       }
