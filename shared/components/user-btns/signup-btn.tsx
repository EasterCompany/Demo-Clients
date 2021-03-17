// Node Modules Imports
import { useState } from 'react';
// Component Imports
import './user-btn.css';
import SignupModal from './user-modals/signup-modal';


const SignupBtn = () => {
  const [modalDisplay, setDisplay] = useState('none');
  const showModal = () => setDisplay('flex');

  return <>
    <button
      id="signup-btn"
      className="user-btn"
      onClick={showModal}
    >
      Sign Up
    </button>
    <SignupModal state={[modalDisplay, setDisplay]} />
  </>
}


export default SignupBtn;
