// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
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
    {/* <i class="fas fa-toilet" style={{fontSize:"1.5em"}}></i> */}

      <button onClick={openMenu} style={{border:"red", width:"60px", outline:"none",height:"30px", borderRadius:"40px", backgroundColor:"white"}}>


        <i class="far fa-grin-hearts" style={{fontSize:"1.5em"}}></i>

      </button>


      {showMenu && (
        <button className="profile-dropdown">
          <div>Welcome {user.firstName}!</div>
          {/* <div>{user.email}</div> */}
          {/* <div>
            <Link onClick={() => history.pushState('/about')} style={{textDecoration:"none", color:"blue"}}>Help</Link>
          </div> */}
          <div className="drop-down-links">
            <div>
              <Link onClick={() => history.push('/about')} style={{textDecoration:"none", color:"black", fontWeight:"bold"}}>Messages</Link>
            </div>
            <div>
              <Link onClick={() => history.push('/about')} style={{textDecoration:"none", color:"black", fontWeight:"bold" }}>Notifications</Link>
            </div>
            <div>
              <Link onClick={() => history.push('/about')} style={{textDecoration:"none", color:"black", fontWeight:"bold"}}>Saved</Link>
            </div>
          </div>
          <div className="log-out-drop-down-links">
            <div>
              <Link onClick={() => history.push('/about')} style={{textDecoration:"none", color:"black"}}>Help</Link>
            </div>
            <div>
              <Link onClick={() => history.push('/about')} style={{textDecoration:"none", color:"black"}}>Log out</Link>
            </div>
          </div>


        </button>
      )}
    </>
  );
}

export default ProfileButton;
