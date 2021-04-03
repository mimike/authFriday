import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import "./SignupForm.css"
import { useHistory} from 'react-router-dom';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';

function SignupForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    //const sessionUser = useSelector((state) => state.session.user);
    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("")
    const [ firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors ] = useState([]);
    //On submit of the form, validate that the confirm password is the same as the password fields, then dispatch the signup thunk action with the form input values. Make sure to handle and display errors from the signup thunk action if there are any.
    const handleSubmit = (e) => {
        // if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, firstName, lastName, address, city, state, password}))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        //}
        //If the confirm password is not the same as the password, display an error message for this.
        //return setErrors(['Confirm Password field must be the same as the Password field']);
    }
    //Render form with controlled inputs for the new user's username, email, and password, and confirm password fields.
    return (
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

            <div className="signup-title">
                <h2><i class="fas fa-poop" style={{color:"pink"}}></i>    join the unkobnb community </h2>
            </div>

            <div className="sign-up-container">

              <div className="email">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="user-name">
                <input
                  type="text"
                  placeholder="User name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="first-name">
                <input
                  type="text"
                  placeholder= "First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="last-name">
                {/* Last Name */}
                <input
                  type="text"
                  value={lastName}
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="address">
                {/* Address */}
                <input
                  type="text"
                  value={address}
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="city">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              <div className="state">
                <input
                  type="text"
                  value={state}
                  placeholder="State"
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>

              <div className="password">
                {/* Password */}
                <input
                  type="password"
                  placeholder="Create a Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="password">
                {/* Confirm Password */}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="signup-submit-button">
                <button type="submit">Sign Up</button>
              </div>

              <div className="already-have-account">
                <h3>Already have an account?</h3>
              </div>
{/*
              <div>
                <Link to="/" className="login-link" style={{textDecoration:"none"}}>Log in</Link>
              </div> */}

              {/* <button className="login-link" type="button" onClick={() => history.push('/')}>Log in!!!</button> */}

              <button className="login-link" style={{backgroundColor: "white"}}onClick={() => setShowModal(true)}>Log in</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    {/* </> */}

              <div>

          </div>




          </div>


        </form>
      );
      // how to get this link to go to login or home page ?
}
export default SignupForm;
