import { useSelector } from 'react-redux';
//import BathroomTile from "./BathroomPage/BathroomTile;
function BestPage( {bathroom} ){
    // const bathrooms = useSelector(state => state.bathroom);  //bathrmReducer
    // const arrayBath = Object.values(bathrooms);
    // const mappedBathrooms = arrayBath.map(bathroom => (
    //     <BestPage bathroom={bathroom} key={bathroom.id} />
    //     )
    // )
    return (
        <div>
            <div>
                <h3>best br</h3>
            </div>


            {/* <div>
                {bathroom.description}
            </div> */}
        </div>

    )
}
export default BestPage;
