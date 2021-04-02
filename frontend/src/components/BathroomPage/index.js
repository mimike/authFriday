import * as bathroomActions from '../../store/bathroom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BathroomTile from "./BathroomTile";
//import { getBathroom} from "../..store/bathroom";
import "./BathroomPage.css"
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
    let count = 0;


    return (
        <>
            <div className="bathroom-container">

                <h1>Cool Bathrooms</h1>
                {/* {mappedComponents} */}

                <a href="/">
                    <div>
                        {mappedComponents.map(bathroom => {
                        count++
                        return <div className={`bathroom-div-${count}`}>
                        {bathroom}
                    </div>}
                )}</div>


                {count = 0}
                </a>


                {/* {mappedComponents.map(bathroom => {
                    count++
                    return <div className={`bathroom-div-${count}`}>
                    THIS IS A NEW!{bathroom}
                </div>}
                )}
                {count = 0} */}



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
