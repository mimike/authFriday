import * as bathroomActions from '../../store/bathroom';
import { useDispatch,   } from "react-router-dom";
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
