import * as bathroomActions from '../../store/bathroom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BathroomTile from "./BathroomTile";

function BathroomPage(){
    // const [ title, setTitle ] = useState("");
    // const [ description, setDescription ] = useState("");
    // const [ address, setAddress ] = useState("")
    //finish these useStates
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(bathroomActions.getBathrooms())
    }, [dispatch])

    const bathrooms = useSelector(state => state.bathroom) || {};
    const arrayBathrooms = Object.values(bathrooms);
    const mappedComponents = arrayBathrooms.map(bathroom => (
        <BathroomTile bathroom={bathroom} key= {bathroom.id}/>
    ) )

    return (
        <>
            <div className="bathroom-container">
                <h1>A very cool bathrooms in Iowa City</h1>
                {mappedComponents}
                {/* {console.log("STUFF", arrayBathrooms)}
                // {arrayBathrooms.forEach(bathroom => {`${bathroom}`} */}
            </div>
        </>
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
