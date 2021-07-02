import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { createBathroom } from '../../store/bathroom';
import './Host.css'

import '../NewBathroomModal/NewBathroom';
function Host() {
    let history = useHistory()
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const bathroom = useSelector((state) => state.bathroom.singleBathroom);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("")
    const [state, setState] = useState("");

    const [costPerDay, setCostPerDay] = useState("");
    const [locationType, setLocationType] = useState("");
    const [bathroomImgUrl, setBathroomImgUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createBathroom({
            ownerId: sessionUser.id,
            title,
            description,
            address,
            city,
            state,
            costPerDay,
            locationType,
            bathroomImgUrl
        }));
    };

    // keep watch of a change on bathroom.id
    // if there is a change, redirect to the newly created bathroom
    useEffect(() => {
        if (bathroom.id) {
            history.push(`/bathroom/${bathroom.id}`);
        }
    }, [bathroom.id]);

    return (
        <>
            <div className="host-title" style={{ color: "orange", marginLeft: "30px", marginTop: "40px" }}>
                <h1>Host Your Bathroom</h1>
            </div>
            <div className="host-text" style={{ marginLeft: "30px" }}>
                <p>Everyone needs a bathroom.
                <br></br>
                <br></br>
                Have an account? Share your bathroom.</p>
            </div>
            {/* <div className="login-new-bathroom-button">
                <button className="not-logged-in-btn" type="submit" onClick={() => history.push('/')}>log in to add you bathroom</button>
            </div> */}

            <div id="upload" class-name="new-loo-container">
                <form className="new-form"
                    onSubmit={handleSubmit}
                >
                    {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul> */}
                    <div className="form-input">
                        <label>Posting Title</label>
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label>Bathroom Description</label>
                        <input
                            style={{ width: "450px" }}
                            type="textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-input">

                        <label>Address</label>
                        <input
                            style={{ width: "450px" }}
                            type="text"

                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />

                    </div>

                    <div className="form-input">
                        <label>City</label>
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-input">

                        <label>State</label>
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            value={state}

                            onChange={(e) => setState(e.target.value)}
                            required
                        />

                    </div>

                    <div className="form-input">

                        <label>Cost</label>
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            value={costPerDay}
                            onChange={(e) => setCostPerDay(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-input">
                        <label>Type of Bathroom</label>
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            placeholder="Public, Private, Luxury, Primitive, Basic, Scenic, Outdoor, Family "
                            value={locationType}
                            onChange={(e) => setLocationType(e.target.value)}
                            required
                        />

                    </div>

                    <div className="form-input">

                        {/* Add a photo: */}
                        <label>Add Photo</label>
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            placeholder="Photo url here"
                            value={bathroomImgUrl}
                            onChange={(e) => setBathroomImgUrl(e.target.value)}
                            required
                        />

                    </div>

                    <div className="submit-new-bathroom-button">
                        <button className="add-bathroom" type="submit">Add bathroom</button>
                    </div>
                    {/* <div className="not-logged-in">
                        <h3>Not logged in?</h3>
                    </div> */}

                    {/* <Link to="/" className="login-link">Log in</Link> */}
                </form>
                <img className="unko-image-container" src="/images/unko3.jpeg" alt="poo" />

            </div>
        </>
    )
}
export default Host;
