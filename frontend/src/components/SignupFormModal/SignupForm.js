import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import "./SignupForm.css"
import { useHistory} from 'react-router-dom';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import { hideSignup, showLogin } from "../../store/modal"

function SignupForm(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false); //login form modal
    //const sessionUser = useSelector((state) => state.session.user);
    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("")
    const [ firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("AL");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors ] = useState([]);
    const states = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ];

    //On submit of the form, validate that the confirm password is the same as the password fields, then dispatch the signup thunk action with the form input values. Make sure to handle and display errors from the signup thunk action if there are any.

    //this function will handle hideSignup and
    const handleHide = () => {
      dispatch(hideSignup());
      dispatch(showLogin()); //
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword){
          setErrors([]);
          dispatch(hideSignup())
          return dispatch(
              sessionActions.signup({email, username, firstName, lastName, address, city, state, password})).catch(async (res) => {
                const data = await res.json();
                if(data && data.errors){
                  setErrors(data.errors)
                }
              });
        }
        return setErrors([
          "Confirm Password field must be the same as Password field"
        ]);
        //}
        //If the confirm password is not the same as the password, display an error message for this.
        //return setErrors(['Confirm Password field must be the same as the Password field']);
    };
    //Render form with controlled inputs for the new user's username, email, and password, and confirm password fields.

    return (
      <>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>

            <div className="signup-title">
                <h2><i class="fas fa-poop" style={{color:"pink"}}></i>    join the unkobnb community </h2>
            </div>

            <div className="sign-up-container">

              <div className="email">
                <label>Email</label>
                <input
                  type="text"

                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="user-name">
              <label>Username</label>
                <input
                  type="text"

                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="first-name">
              <label>First Name</label>
                <input
                  type="text"

                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="last-name">
              <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}

                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="address">
                {/* Address */}
                <label>Address</label>
                <input
                  type="text"
                  value={address}

                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="city">
              <label>City</label>
                <input
                  type="text"

                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              <div className="state">
                <label>State</label>
                 <select
                            className="state-dropdown"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                            >
                            <option value={0} disabled>
                                Select State
                            </option>
                            {states.map((state) => (
                                <option type="text" value={state} key={state}>
                                {state}
                                </option>
                            ))}
                </select>

              </div>

              <div className="password">
                {/* Password */}
                <label>Password</label>
                <input
                  type="password"

                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="password">
              <label>Confirm Password</label>
                <input
                  type="password"

                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="signup-submit-button">
                <button className="signup-submit-btn" type="submit">Create Account</button>
              </div>

              <div className="already-have-account">
                <h3>Already have an account?</h3>
              </div>
{/*
              <div>
                <Link to="/" className="login-link" style={{textDecoration:"none"}}>Log in</Link>
              </div> */}

              {/* <button className="login-link" type="button" onClick={() => history.push('/')}>Log in!!!</button> */}
    {/* </> */}
              <div>

          </div>
          </div>
        </form>

      <button className="login-link" style={{backgroundColor: "white"}} onClick={handleHide}>Login</button>
      </>
      );
      // how to get this link to go to login or home page ?
}
export default SignupForm;
