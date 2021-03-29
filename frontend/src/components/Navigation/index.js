import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){

  const [ keyword, setKeyword ] = useState();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />

    );
  } else {
    sessionLinks = (   // not sure if this is right. the modal sign up doesn't work.
      <>
        <SignupFormModal />
        <NavLink to="/user"></NavLink>
        <LoginFormModal />
        {/* <NavLink to="/">Log in!</NavLink> */}
      </>
    );
  }

  return (   //search bar icon?!
    <ul>
      {/* <li> */}
      <input
        style={{width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
        key="random1"
        value={keyword}
        placeholder={"Where are you going?"}
        onChange={(e) => setKeyword(e.target.value)}
        onClick={(e) => {
            // Op.or
            // route to /feed
            // <Feed />
        }}
    />
    <i class="fas fa-search"></i>
        <h1>unkobnb</h1>
        {/* <NavLink exact to="/">THIS HOME BUTTON</NavLink> */}
        <i class="fas fa-poop"></i>
        {isLoaded && sessionLinks}
      {/* </li> */}
    </ul>
  );
}

export default Navigation;
