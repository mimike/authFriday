import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
//import BathroomTile from '../BathroomPage/BathroomTile';
import SearchBar from '../SearchBar';
import './Navigation.css';
import { useHistory} from 'react-router-dom';

function Navigation({ isLoaded }){  //isLoaded ?
  const history = useHistory();
  // const [ keyword, setKeyword ] = useState();
  const sessionUser = useSelector(state => state.session.user); //?

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (   // not sure if this is right. the modal sign up doesn't work.
      <>
        <div className="navigation-button-container">
          <div className="signup-button">
            <SignupFormModal />
          </div>
          <div className="login-button">
            <LoginFormModal />
          </div>
        </div>

        <div className="button-container">
          {/* <div>
            <button className="nav-button" type="button" onClick={() => history.push('/feed')}>Feed</button>
          </div> */}

          {/* <div>
            <button className="nav-button" type="button" onClick={() => history.push('/coolbathroom')}>Cool Bathrooms</button>
          </div> */}

          <div>
            <button className="nav-button" style={{color:"blue"}}type="button" onClick={() => history.push('/best')}>Discover</button>
          </div>

          <div>
            <button className="nav-button" style={{color:"green"}} type="button" onClick={() => history.push('/new')}>Share</button>
          </div>


        </div>
      </>
    );
  }

//bathroomsInCity.map((bathroom) =>  <BathroomTile bathroom={bathroom} key={bathroom.id}/>)
  return (   //search bar icon?!
    <>
      <div>
        <SearchBar />
      </div>


      <ul>
        {/* <input
          style={{width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
          key="random1"
          value={keyword}
          placeholder={"Where are you going?"}
          onChange={(e) => setKeyword(e.target.value)}
        /> */}
        {/* <button style={{background:"white", borderRadius:"50%", height:"30px",
    width:"30px"}} type="submit"><i class="fas fa-search"></i></button> */}
          <div>
            <h1 > <a href="/" style={{textDecoration:"none", color:"black"}}><i class="fas fa-poop" style={{color:"pink", marginRight:"10px"}}></i>unkobnb</a></h1>
          </div>
          {isLoaded && sessionLinks}
        {/* <div>
          {mappedBathrooms}
        </div> */}
      </ul>
    </>
  );
}
export default Navigation;
//
