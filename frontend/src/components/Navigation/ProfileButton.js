// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu} style={{border:"red", width:"60px", height:"30px", borderRadius:"20px", backgroundColor:"white"}}>
        {/* <i class="fab fa-airbnb"></i> */}

        <i class="fas fa-grip-lines"></i>
      </button>
      {showMenu && (
        <button className="profile-dropdown" style={{height:"200px", width:"200px", backgroundColor:"white", borderRadius:"10px", margin:"10px"}}>
          <div>Hello {user.firstName}</div>
          <div>{user.email}</div>
          <div>
            <Link onClick={logout} style={{textDecoration:"none", color:"blue"}}>Help</Link>
          </div>
          <div>
            <Link onClick={logout} style={{textDecoration:"none", color:"blue"}}>Log out</Link>
          </div>
        </button>
      )}
    </>
  );
}

export default ProfileButton;
