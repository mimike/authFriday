import React from "react";
import { useState } from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './NewBathroom.css';

function NewBathroom({prop}){

  //let history = useHistory()
    //const dispatch = useDispatch();
    //const sessionUser = useSelector((state) => state.session.user);
    // const [ title, setTitle ] = useState("");
    // const [ description, setDescription ] = useState("")
    // const [ address, setAddress ] = useState("");
    // const [ city, setCity ] = useState("")
    // const [ state, setState ] = useState("");

    // const [ costPerDay, setCostPerDay ] = useState("");
    // const [ locationType, setLocationType ] = useState("");
    // const [ bathroomImgUrl, setBathroomImgUrl ] = useState("");
    //const [errors, setErrors ] = useState([]);

    // const handleSubmit = (e) => {
    //     // if (password === confirmPassword) {
    //         setErrors([]);
    //         return dispatch(sessionActions.signup({ email, username, firstName, lastName, address, city, state, password}))
    //             .catch(async (res) => {
    //                 const data = await res.json();
    //                 if (data && data.errors) setErrors(data.errors);
    //             });
        //}
        //If the confirm password is not the same as the password, display an error message for this.
        // return setErrors(['Confirm Password field must be the same as the Password field']);
    //}
        return (
          <>
            <div className="host-bathroom-slide-div" ref={prop}>
              <div className="new-bathroom-title">
                <h2><i class="fas fa-poop" style={{color:"pink"}}></i>     new bathroom</h2>
              </div>
              </div>

         </>
)
        }


export default NewBathroom;
