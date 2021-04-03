// import "./BestPage.css";
// import * as bathroomActions from "../../store/bathroom";
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import BathroomTile from "../BathroomPage/BathroomTile"

// function BestPage( {bathroom} ){
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(bathroomActions.getBathrooms())
//     }, [dispatch])
//     const bathrooms = useSelector(state => state.bathroom) || {};
//     const arrayBathrooms = Object.values(bathrooms);
//     const mappedComponents = arrayBathrooms.map(bathroom => (
//         <BathroomTile bathroom={bathroom} key= {bathroom.id}/>
//     ) )
//     let count = 0;
//     return (
//         <div>
//                 <div className="best-text">
//                     <h1>Best Bathrooms</h1>
//                 </div>
//             <div className="best-container">

//                 <div className="the-container">
//                 {mappedComponents.map(bathroom => {
//                         count++
//                         return <div style={{textDecoration:"none"}}className={`bathroom-div-${count}`}>
//                         {bathroom}</div>}

//                 )}</div>
//                 </div>
//         </div>
//     )
// }
// // export default BestPage;
// // import "./BestPage.css";
// // import * as bathroomActions from '../../store/bathroom';
// // import { useEffect} from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import BathroomTile from "../BathroomPage/BathroomTile"
// // function BestPage( {bathroom} ){
// //     const dispatch = useDispatch();

// //     useEffect(()=>{
// //         dispatch(bathroomActions.getBathrooms())
// //     }, [dispatch])
// //     const bathrooms = useSelector(state => state.bathroom) || {};
// //     const arrayBathrooms = Object.values(bathrooms);
// //     const mappedComponents = arrayBathrooms.map(bathroom => (
// //         <BathroomTile bathroom={bathroom} key= {bathroom.id}/>
// //     ) )
// //     return (
// //         <div>
// //             <div className="best-container">
// //                 <h3>best br</h3>
// //             </div>

// //             <div className="bathroom-container">
// //                 <h1>Cool Bathrooms</h1>
// //                 {mappedComponents}
// //             </div>

// //             {/* <div>
// //                 {bathroom.description}
// //             </div> */}
// //         </div>

// //     )
// // }
// export default BestPage;
import "./BestPage.css";
import * as bathroomActions from '../../store/bathroom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BathroomTile from "../BathroomPage/BathroomTile"
function BestPage( {bathroom} ){
    const dispatch = useDispatch();


    const bathrooms = useSelector(state => state.bathroom.list)
    const bathroomTest = useSelector(state => state.bathroom.test)
    // console.log("BATHROOMS", bathrooms)
    const arrayBathrooms = Object.values(bathrooms);
    // console.log("ARRAYBR", arrayBathrooms)
    // const mappedComponents = [];
    // for(let bathroom in bathrooms){
    //     mappedComponents.push(bathroom)

    // }
    const mappedComponents = bathroomTest?.map(bathroom => (

        <BathroomTile bathroom={bathroom} key= {bathroom.id}/>

    ) )
    console.log("THIIING", mappedComponents)
    //const [ mappedComponents, setMappedComponents] = useState(mappedComponents);
    let count = 0;

    useEffect(()=>{
        dispatch(bathroomActions.getBathrooms())
        //setMappedComponents(mappedComponents)
    }, [dispatch])

    return (


        <div>
            <div className="best-container">
                <h3>best br</h3>
            </div>

            <div className="bathroom-container">
                <h1>Cool Bathrooms</h1>

            </div>
            <a href="/">
                    <div>
                        {mappedComponents?.map(bathroom => {
                        count++
                        console.log("asdfff")
                        return <div className={`bathroom-div-${count}`}>
                        {bathroom}
                    </div>}
                )}</div>


                {count = 0}
                </a>
            {/* <div>
                {bathroom.description}
            </div> */}
        </div>

    )
}
export default BestPage;
