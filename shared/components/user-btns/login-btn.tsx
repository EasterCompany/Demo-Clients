// Node Modules Imports
import { useState } from 'react';
// Component Imports
import './user-btn.css';
import LoginModal from './user-modals/login-modal';


const LoginBtn = () => {
  const [modalDisplay, setDisplay] = useState('none');
  const showModal = () => setDisplay('flex');

  return <>
    <button
      id="login-btn"
      className="user-btn"
      onClick={showModal}
    > Login </button>
    <LoginModal state={[modalDisplay, setDisplay]} />
  </>
}


export default LoginBtn;
