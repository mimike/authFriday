// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import {useSelector} from "react-redux";
import SignupForm from './SignupForm';
import { useDispatch } from "react-redux";
import { showSignup, hideSignup} from "../../store/modal"


function SignupFormModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const signUpModal = useSelector(state => state.modal.showSignup) // state either t or f

  // setShowModal is true, we want it to be false when we click login

  const changeState = () => {
    dispatch(showSignup())
  }  //true

  //when a user clicks

  return (
    <>
      <button style={{backgroundColor: "white", border:"none", fontSize:"1rem"}} onClick={changeState}>Sign up</button>
      {signUpModal && (
        <Modal onClose={() => dispatch(hideSignup())}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
