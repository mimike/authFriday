import { useState } from "react";
//import { useSelector } from "react-redux";
//import BathroomTile from "../BathroomPage/BathroomTile"
function SearchBar(){
    const [ keyword, setKeyword ] = useState();

    // const bathroomsInCity = useSelector(state => state.bathroom);  //bathrmReducer
    //   const arrayBath = Object.values(bathroomsInCity);
    //   const mappedBathrooms = arrayBath.map(bathroom => (
    //     <BathroomTile bathroom={bathroom} key={bathroom.id}/>
      //))
        return (
        <ul>
            <input
                style={{width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
                key="random1"
                value={keyword}
                placeholder={"Where are you going?"}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <button style={{background:"white", borderRadius:"50%", height:"30px", width:"30px"}} type="submit"><i class="fas fa-search"></i></button>

            {/* <div>
                {mappedBathrooms}
            </div> */}
        </ul>
    );
}

export default SearchBar;
