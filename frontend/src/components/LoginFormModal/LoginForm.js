import React, { useState } from 'react';
//import { Modal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
//import { Redirect } from 'react-router-dom';

import './LoginForm.css';

//Render a form with a controlled input for the user login credential (username or email) and a controlled input for the user password.
function LoginForm(){
    const dispatch = useDispatch();
    //const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential ] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    //If there is a current session user in the Redux store, then redirect the user to the "/" path if trying to access the LoginFormPage.
    // if (sessionUser) return (
    //     <Redirect to="/" />
    // );

    //On submit of the form, dispatch the login thunk action with the form input values. Make sure to handle and display errors from the login thunk action if there are any.
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h2>Log in</h2>
            <label>
                {/* Email Address */}
                <input
                    type="text"
                    placeholder="Email Address"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>

            <label>
                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>

            <label>
                <button type="submit">Continue</button>
            </label>
        </form>
    );
}


export default LoginForm;
