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
            <div className="host-title" style={{ color: "blue", marginLeft: "30px", marginTop: "40px" }}>
                <h1>Host Your Bathroom</h1>
            </div>
            <div className="host-text" style={{ marginLeft: "40px" }}>
                <p>Everyone needs a bathroom. Share your bathroom here.</p>
            </div>


            <div id="upload" class-name="new-loo-container">
                <img className="unko-image-container" src="/images/unko3.jpeg" alt="poo" />


                <form className="new-form"
                    onSubmit={handleSubmit}
                >
                    {/* <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul> */}
                    <div className="form-input">
                        {/* <label> */}
                        {/* Catchy title: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            placeholder="Title of bathroom"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>
                    <div className="form-input">
                        {/* <label> */}
                        {/* Description: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>

                    <div className="form-input">
                        {/* <label> */}
                        {/* Address: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>

                    <div className="form-input">
                        {/* <label> */}
                        {/* City: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            value={city}
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>

                    <div className="form-input">
                        {/* <label> */}
                        {/* State: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            value={state}
                            placeholder="State"
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>

                    <div className="form-input">
                        {/* <label> */}
                        {/* Cost: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            value={costPerDay}
                            placeholder="How much is this bathroom"
                            onChange={(e) => setCostPerDay(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>

                    <div className="form-input">
                        {/* <label> */}
                        {/* Location Type: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            placeholder="What kinda bathroom"
                            value={locationType}
                            onChange={(e) => setLocationType(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>

                    <div className="form-input">
                        {/* <label> */}
                        {/* Add a photo: */}
                        <input
                            style={{ width: "450px" }}
                            type="text"
                            placeholder="Photo url here"
                            value={bathroomImgUrl}
                            onChange={(e) => setBathroomImgUrl(e.target.value)}
                            required
                        />
                        {/* </label> */}
                    </div>

                    <div className="submit-new-bathroom-button">
                        <button className="ugh1" type="submit">Add bathroom</button>
                    </div>
                    <div className="not-logged-in">
                        <h3>Not logged in?</h3>
                    </div>


                    <div className="login-new-bathroom-button">
                        <button className="ugh2" type="submit" onClick={() => history.push('/')}>log in!</button>
                    </div>

                    {/* <Link to="/" className="login-link">Log in</Link> */}
                </form>


                {/* <div className="unku-image-container">
                    <img src="/images/unko3.jpeg" alt="poo"/>
                    </div> */}

            </div>
        </>
    )
}
export default Host;
