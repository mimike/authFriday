import * as bathroomActions from '../../store/bathroom';
import { useState, useEffect } from "react";
import { useDispatch } from "react-router-dom";
function BathroomPage(){
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");

    return (
        <div className="bathroom-container">
            <h1>A very cool bathrooms in Iowa City</h1>
        </div>
    )
}

export default BathroomPage;

/////barts code!!!!!

// import { useSelector } from 'react-redux';
// import { useDispatch } from "react-router-dom";
// import { useEffect } from "react";
// import { getBathrooms } from '../../store/bathroom'
// import bathroom from '../../../../backend/db/models/bathroom';

// function BathroomPage(){
//     const bathrooms = useSelector(state => state.bathrooms);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getBathrooms()); // async
//     }), [dispatch]

//     const renderBathrooms = () => {
//        return Object.values(bathrooms).map(bathroom => {
//            return (
//                <li>{bathroom.name}</li>
//            );
//        });
//     }

//     return (
//         <ul key={bathroom.id}>
//         {renderBathrooms()}
//         </ul>
//     )
// }
// export default BathroomPage;
////
