// Node modules imports
import { useState } from 'react';
// Local app imports
import './modal.css';
import Loader from '../../loading/loading';
import closeImg from '../../../assets/icons/close2.svg';
import userRegisterForm from '../../../library/user/register';


const SignupModal = (props: any) => {
  const [modalDisplay, setDisplay] = props.state;
  const [emailError, setEmailError] = useState('none');
  const [passLenError, setPassLenError] = useState('none');
  const [passConError, setPassConError] = useState('none');
  const [dobError, setdobError] = useState('none');
  const [loaderDisplay, setLoader] = useState('none');

  const hideModal = () => {
    setDisplay('none');
  }

  const verifyForm = () => {
    // Show Loader
    setLoader('flex');

    // Collect Elements
    const emailEl = document.getElementById(
      'user-register-email') as HTMLInputElement;
    const passEl = document.getElementById(
      'user-register-password') as HTMLInputElement;
    const cpassEl = document.getElementById(
      'user-register-comfirm-password') as HTMLInputElement;
    const dobEl = document.getElementById(
      'user-register-dob') as HTMLInputElement;
    const email = emailEl.value;
    const pass = passEl.value;
    const cpass = cpassEl.value;

    // Set minimum age to 13 years old
    const dob = new Date(dobEl.value);
    const dobLimit = new Date();
    dobLimit.setFullYear(dobLimit.getFullYear() - 13);

    // Field Check List
    const fieldCheckList = {
      email: '',
      pass: '',
      dob: ''
    }

    // Check Email
    if (!email.includes('@')) setEmailError('block');
    else if (!email.split('@')[1].includes('.')) setEmailError('block');
    else {setEmailError('none'); fieldCheckList.email = email;}

    // Check Password
    if (pass.length < 8) setPassLenError('block');
    else {
      setPassLenError('none');
      if (pass !== cpass) setPassConError('block');
      else {
        setPassConError('none'); fieldCheckList.pass = pass;
      }
    }

    // Check Date of Birth
    if (dob > dobLimit) setdobError('block');
    else if (!dobEl.value) setdobError('block');
    else {setdobError('none'); fieldCheckList.dob = dob.toISOString();}

    // Return field checklist
    return fieldCheckList;
  }

  const formSubmit = () => {
    // Verify form
    const verification = verifyForm();
    // Send new user data to server
    if (verification.email && verification.pass && verification.dob) {
      userRegisterForm(
        verification.email, verification.pass, verification.dob
      );
    }
    // Hide loading indicator
    setLoader('none');
  }

  const SignupSection = () => {
    return <div
      className="user-signup-section"
    >
      <h1> New Account </h1>
      <div
        className='user-form-container'
        style={{
          paddingBottom: '24px',
          flexDirection: "column"
        }}
      >
        <Loader state={loaderDisplay} />
        <div className='user-form'>
          <h2> Email </h2>
          <p
            id='email-error-message'
            className='error-message'
            style={{display: emailError}}
          >
            Invalid email.
          </p>
          <input
            id='user-register-email'
            type="email" placeholder="Enter your email address"
          />
          <h2> Password </h2>
          <p
            id='passLength-error-message'
            className='error-message'
            style={{display: passLenError}}
          > Password must be at least 8 characters long. </p>
          <input
            id='user-register-password'
            type="password" placeholder="Enter your password"
          />
          <p
            id='passCon-error-message'
            className='error-message'
            style={{display: passConError}}
          > Passwords must match. </p>
          <input
            id='user-register-comfirm-password'
            type="password" placeholder="Confirm your password"
          />
          <h2> Date of Birth </h2>
          <p
            id='dob-error-message'
            className='error-message'
            style={{display: dobError}}
          > You must be at least 13 years old. </p>
          <input
            id='user-register-dob'
            type="date"
            max="2021-01-01"
            min="1900-01-01"
          />
          <button
            type="button"
            onClick={formSubmit}
          > Submit </button>
        </div>
      </div>
    </div>
  }

  return <>
    <div
      className='user-modal'
      style={{display: modalDisplay}}
      onClick={hideModal}
    />
    <div
      id='user-signup-modal'
      className='user-modal-content'
      style={{display: modalDisplay}}
    >
      <img
        className='modal-close-button'
        src={closeImg}
        alt='close'
        onClick={hideModal}
      />
      <SignupSection />
    </div>
  </>
}


export default SignupModal;
