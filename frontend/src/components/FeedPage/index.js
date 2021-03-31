//THIS PAGE WILL output the search results by city/location.
import { useState } from "react";
import { useSelector } from "react-redux";
//import BathroomTile from "../BathroomPage/BathroomTile"
import ResultTile from "./ResultTile";

function FeedPage(){
    //const [ keyword, setKeyword ] = useState();
    const bathroomsInCity = useSelector(state => state.search.bathrooms) || [];  //bathrmReducer
    // const arrayBath = Object.values(bathroomsInCity);
    const mappedBathrooms = bathroomsInCity.map(bathroom => (
    <ResultTile bathroom={bathroom} key={bathroom.id}/>
    ))
        return (
        <ul>
            <div className="feed-container">
                <h1>A list of all the bathrooms</h1>
            </div>

            <div>
                {mappedBathrooms}
            </div>
        </ul>
    );
}
export default FeedPage;

   // function initMap(): void {
    //     // The location of Uluru
    //     const uluru = { lat: -25.344, lng: 131.036 };
    //     // The map, centered at Uluru
    //     const map = new google.maps.Map(
    //       document.getElementById("map") as HTMLElement,
    //       {
    //         zoom: 4,
    //         center: uluru,
    //       }
    //     );
    //     // The marker, positioned at Uluru
    //     const marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map,
    //     });
    //   }
