// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import {hideLogin, showLogin} from "../../store/modal"

function LoginFormModal() {
  const dispatch = useDispatch();
  const loginModal = useSelector(state => state.modal.showLogin)

  return (
    <>
      <button style={{backgroundColor: "white", border:"none", fontSize:"1rem"}} onClick={() => dispatch(showLogin())}>Log in</button>
      {loginModal && (
        <Modal onClose={() => dispatch(hideLogin())}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
