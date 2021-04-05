import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewBathroom from './NewBathroom';

function NewBathroomModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
     
    </>
  );
}

export default NewBathroomModal;



// import React from "react";
// import { useState } from "react";
// //import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

// import './NewBathroomPage.css';

// function NewBathroomPage(){
//   let history = useHistory()
//     //const dispatch = useDispatch();
//     //const sessionUser = useSelector((state) => state.session.user);
//     const [ title, setTitle ] = useState("");
//     const [ description, setDescription ] = useState("")
//     const [ address, setAddress ] = useState("");
//     const [ city, setCity ] = useState("")
//     const [ state, setState ] = useState("");
//     const [ costPerDay, setCostPerDay ] = useState("");
//     const [ locationType, setLocationType ] = useState("");
//     const [ bathroomImgUrl, setBathroomImgUrl ] = useState("");
//     //const [errors, setErrors ] = useState([]);

//     // const handleSubmit = (e) => {
//     //     // if (password === confirmPassword) {
//     //         setErrors([]);
//     //         return dispatch(sessionActions.signup({ email, username, firstName, lastName, address, city, state, password}))
//     //             .catch(async (res) => {
//     //                 const data = await res.json();
//     //                 if (data && data.errors) setErrors(data.errors);
//     //             });
//         //}
//         //If the confirm password is not the same as the password, display an error message for this.
//         // return setErrors(['Confirm Password field must be the same as the Password field']);
//     //}
//         return (
//           <>
//             <div className="new-container">
//               <div>
//                 <h2>New Bathroom</h2>
//               </div>

//               <form className="new-form"
//               // onSubmit={handleSubmit}
//               >
//                 {/* <ul>
//                   {errors.map((error, idx) => <li key={idx}>{error}</li>)}
//                 </ul> */}

//                 <div className="form-input">
//                   <label>
//                       Catchy title
//                       <input
//                       type="text"
//                       placeholder="Title of bathroom"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                       required
//                       />
//                   </label>
//                 </div>

//                 <div className="description-form-input">
//                   <label>
//                       Description
//                       <input
//                       type="text"
//                       placeholder="Description"
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       required
//                       />
//                   </label>
//                 </div>

//                 <div className="address-form-input">
//                   <label>
//                       Address
//                       <input
//                       type="text"
//                       placeholder= "Address"
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       required
//                       />
//                   </label>
//                 </div>

//                 <div className="form-input">
//                   <label>
//                       City
//                       <input
//                       type="text"
//                       value={city}
//                       placeholder="City"
//                       onChange={(e) => setCity(e.target.value)}
//                       required
//                       />
//                   </label>
//                 </div>

//                 <div className="form-input">
//                   <label>
//                       State
//                       <input
//                       type="text"
//                       value={state}
//                       placeholder="State"
//                       onChange={(e) => setState(e.target.value)}
//                       required
//                       />
//                   </label>
//                 </div>

//               <div className="form-input">
//                   <label>
//                       Cost
//                       <input
//                       type="text"
//                       value={costPerDay}
//                       placeholder="How much is this bathroom"
//                       onChange={(e) => setCostPerDay(e.target.value)}
//                       required
//                       />
//                   </label>
//               </div>

//               <div className="form-input">
//                   <label>
//                       Location Type
//                       <input
//                       type="text"
//                       placeholder="What kinda bathroom"
//                       value={locationType}
//                       onChange={(e) => setLocationType(e.target.value)}
//                       required
//                       />
//                   </label>
//               </div>

//               <div className="form-input">
//                   <label>
//                       Add a photo
//                       <input
//                       type="text"
//                       placeholder="Photo url here"
//                       value={bathroomImgUrl}
//                       onChange={(e) => setBathroomImgUrl(e.target.value)}
//                       required
//                       />
//                   </label>
//               </div>

//               <div className="submit-new-bathroom-button">
//               <button type="submit">Add bathroom</button>

//               </div>

//               <h3>Not logged in?</h3>
//               <button type="submit" onClick={() => history.push('/')}>log in!</button>
//               {/* <Link to="/" className="login-link">Log in</Link> */}
//               </form>

//             </div>

//             </>
//           );

// }

// export default NewBathroomPage;
// //how do u history.push to a login modal?
