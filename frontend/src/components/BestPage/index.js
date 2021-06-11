
import "./BestPage.css";
import * as bathroomActions from '../../store/bathroom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BathroomTile from "../BathroomPage/BathroomTile"
function BestPage( {bathroom} ){
    const dispatch = useDispatch();


    const bathrooms = useSelector(state => state.bathroom.list)
    const bathroomTest = useSelector(state => state.bathroom.test)

    const arrayBathrooms = Object.values(bathrooms);
  
    const mappedComponents = bathroomTest?.map(bathroom => (

        <BathroomTile bathroom={bathroom} key= {bathroom.id}/>

    ) )

    //const [ mappedComponents, setMappedComponents] = useState(mappedComponents);
    let count = 0;

    useEffect(()=>{
        dispatch(bathroomActions.getBathrooms())
        //setMappedComponents(mappedComponents)
    }, [dispatch])

    return (


        <div>
            <div className="best-container">

            </div>

            <div className="bathroom-container">
                <h1>Unique Loos</h1>
            </div>

                    <div>
                        {mappedComponents?.map(bathroom => {
                        count++
                        return <div className={`bathroom-div-${count}`}>
                        {bathroom}
                    </div>}
                )}</div>


                {count = 0}

            {/* <div>
                {bathroom.description}
            </div> */}
        </div>

    )
}
export default BestPage;
