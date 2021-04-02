import "./BestPage.css";
import * as bathroomActions from '../../store/bathroom';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BathroomTile from "../BathroomPage/BathroomTile"
function BestPage( {bathroom} ){
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
        <div>
            <div className="best-container">
                <h3>best br</h3>
            </div>

            <div className="bathroom-container">
                <h1>Cool Bathrooms</h1>
                {mappedComponents}
            </div>

            {/* <div>
                {bathroom.description}
            </div> */}
        </div>

    )
}
export default BestPage;
