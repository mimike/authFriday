import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

function NewBathroomPage(){
  let history = useHistory()

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("")
  const [ address, setAddress ] = useState("");
  const [ city, setCity ] = useState("")
  const [ state, setState ] = useState("");

  const [ costPerDay, setCostPerDay ] = useState("");
  const [ locationType, setLocationType ] = useState("");
  const [ bathroomImgUrl, setBathroomImgUrl ] = useState("");

    return (

    <>
      <form className="new-form"
              // onSubmit={handleSubmit}
              >
                {/* <ul>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> */}

                <div className="form-input">
                  {/* <label> */}
                      {/* Catchy title: */}
                      <input
                      style={{width:"450px"}}
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
                      style={{width:"450px"}}
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
                      style={{width:"450px"}}
                      type="text"
                      placeholder= "Address"
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
                      style={{width:"450px"}}
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
                      style={{width:"450px"}}
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
                      style={{width:"450px"}}
                      type="text"
                      value={costPerDay}
                      placeholder="Cost Per Day"
                      onChange={(e) => setCostPerDay(e.target.value)}
                      required
                      />
                  {/* </label> */}
              </div>

              <div className="form-input">
                  {/* <label> */}
                      {/* Location Type: */}
                      <input
                      style={{width:"450px"}}
                      type="text"
                      placeholder="What kind of bathroom?"
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
                      style={{width:"450px"}}
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

              <h3>Not logged in?</h3>

              <div className="login-new-bathroom-button">
                <button className="ugh2" type="submit" onClick={() => history.push('/')}>log in!</button>
              </div>

              {/* <Link to="/" className="login-link">Log in</Link> */}
              </form>

    </>
  )
}
export default NewBathroomPage;
