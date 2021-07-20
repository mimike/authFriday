import "./SingleResult.css"
import SingleResultTile from "./SingleResultTile";
import * as bathroomActions from '../../store/bathroom';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//THIS PAGE WILL output the single result from the search results page aka FEED PAGE
function SingleResult( { bathroom }){

const bathroomId = useParams().id

const dispatch = useDispatch();
const singleBathroom = useSelector(state => state.bathroom.list[bathroomId])
useEffect(()=>{
    dispatch(bathroomActions.getSingleBathroom(bathroomId))
}, [dispatch])

const bathroomFromSearch = useSelector(state => state.bathroom.singleBathroom) || {};
        // ? prevents code from stopping when the first render. dont key into the prop if the obj is undef. else key into it if it's defined

         return (
            <>
                <SingleResultTile bathroom={bathroomFromSearch}/>

            </>
    );
}


export default SingleResult;
