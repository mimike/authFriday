import { useState } from "react";
//import { useSelector } from "react-redux";
//import BathroomTile from "../BathroomPage/BathroomTile"
import { useDispatch } from "react-redux";
import { getSearch } from '../../store/search';
import { useHistory } from 'react-router-dom';
function SearchBar(){
    const [ keyword, setKeyword ] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const submit = (e)=> {
        //when we click on button and
        e.preventDefault();
        dispatch(getSearch(keyword));
        history.push("/feed")
    }

        return ( //hit return or click for dumb users
        <form onSubmit={(e)=> submit(e)} >

            <input
                style={{width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
                value={keyword}
                placeholder={"Where are you going?"}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <button onClick={(e) => submit(e)} style={{background:"white", borderRadius:"50%", height:"30px", width:"30px"}} type="submit"><i class="fas fa-search"></i></button>
        </form>
    );
}

export default SearchBar;
