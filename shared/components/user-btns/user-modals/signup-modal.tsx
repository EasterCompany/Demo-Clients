// Node modules imports
import { useState, SyntheticEvent } from 'react';
import { render } from "react-dom";

// Local app imports
import './modal.css';
import Loader from '../../loading/loading';
import GoogleLoginBtn from '../google-login';
import FacebookLoginBtn from '../facebook-login';
import closeImg from '../../../assets/icons/close2.svg';
import serverAdr from '../../../library/server/address';
import userRegisterForm from '../../../library/user/register';

// Field Check List
const fieldCheckList = {
  email: '',
  pass: '',
  dob: ''
}


const DOBForm = () => {
  const [dobError, setdobError] = useState('none');
  const [loaderState, setLoader] = useState('none');

  // Set minimum age to 13 years old
  const today = new Date();
  const todayMM = () => {
    if (today.getMonth() < 9) return '0' + String(today.getMonth() + 1);
    return String(today.getMonth() + 1);
  }
  const maxDate = `${today.getFullYear()}-${todayMM()}-${today.getDate()}`
  console.log(maxDate);
  const dobLimit = new Date();
  dobLimit.setFullYear(dobLimit.getFullYear() - 13);

  const submitDOBForm = (event: SyntheticEvent) => {
    // Prevent form redirecting
    event.preventDefault();
    // Fetch form data
    const dobEl = document.getElementById(
      'user-register-dob') as HTMLInputElement;
    // Fetch form values
    const dob = new Date(dobEl.value);
    // Set error message status
    if (dob > dobLimit) return setdobError('block');
    else if (!dobEl.value) return setdobError('block');
    else {
      setdobError('none');
      fieldCheckList.dob = dob.toISOString();
      console.log(fieldCheckList);
      setLoader('flex');
      userRegisterForm(
        fieldCheckList.email, fieldCheckList.pass, fieldCheckList.dob
      );
    }
  }

  return <>
    <Loader state={loaderState} />
    <h2> Date of Birth </h2>
    <p
      id='dob-error-message'
      className='error-message'
      style={{display: dobError}}
    > You must be at least 13 years old. </p>
    <input
      id='user-register-dob'
      type="date"
      max={maxDate}
      min="1900-01-01"
    />
    <button
      type="submit"
      onClick={submitDOBForm}
    > Next </button>
  </>
}


const PasswordForm = () => {
  const [passLenError, setPassLenError] = useState('none');
  const [passConError, setPassConError] = useState('none');

  const submitPasswordForm = (event: SyntheticEvent) => {
    // Prevent form redirecting
    event.preventDefault();
    // Fetch form data
    const passEl = document.getElementById(
      'user-register-password') as HTMLInputElement;
    const cpassEl = document.getElementById(
      'user-register-comfirm-password') as HTMLInputElement;
    // Fetch form values
    const pass = passEl.value;
    const cpass = cpassEl.value;
    // Set error message status
    if (pass.length < 8) setPassLenError('block');
    else setPassLenError('none');
    if (pass !== cpass) setPassConError('block');
    else setPassConError('none');
    if (pass.length >= 8 && pass === cpass) {
      fieldCheckList.pass = pass;
      return render(
        <DOBForm />,
        document.getElementById('user-form-register')
      )
    }
  }

  return <>
    <h2> Create Password </h2>
    <p
      id='passLen-error-message'
      className='error-message'
      style={{display: passLenError}}
    > Password must be at least 8 characters long. </p>
    <p
      id='passCon-exists-message'
      className='error-message'
      style={{display: passConError}}
    > Password fields must match. </p>
    <input
      id='user-register-password'
      type="password" placeholder="Enter your password"
    />
    <input
      id='user-register-comfirm-password'
      type="password" placeholder="Confirm your password"
    />
    <button
      type="submit"
      onClick={submitPasswordForm}
    > Next </button>
  </>
}


const EmailForm = (props: any) => {
  const [emailError, setEmailError] = useState('none');
  const [emailExists, setEmailExists] = useState('none');

  // Email Submission Form
  const submitEmailForm = (event: SyntheticEvent) => {
    // Prevent form redirecting
    event.preventDefault();
    // Fetch form data
    const emailEl = document.getElementById('user-register-email') as HTMLInputElement;
    const email = emailEl.value;
    // Check email
    if (!email.includes('@')) return setEmailError('block');
    else if (!email.split('@')[1].includes('.')) return setEmailError('block');
    else {setEmailError('none');}
    // Check email isn't used
    fetch(serverAdr + 'api/register/verify',{
      headers: {
        'Content-Type': 'text/plain',
        'Authorization': email
      }
    }).then(response => {response.json()
      .then(data => {
        if (data['status'] === 'OK') {
          setEmailExists('none');
          fieldCheckList.email = email;
          return render(
            <PasswordForm />,
            document.getElementById('user-form-register')
          )
        }
        return setEmailExists('block');
      })
    })
  }

  return <>
    <h2> Email Address </h2>
    <p
      id='email-error-message'
      className='error-message'
      style={{display: emailError}}
    > Invalid email. </p>
    <p
      id='email-exists-message'
      className='error-message'
      style={{display: emailExists}}
    > That email address is already taken. </p>
    <input
      id='user-register-email'
      type="email" placeholder="Enter your email address"
    />
    <button
      type="submit"
      onClick={submitEmailForm}
    > Next </button>
    <div className='user-form-divider'
      style={{width: '95%', height: '3px', margin: '5% 0 2.5% 0'}}
    />
    <div
      className='user-form-social'
      style={{height: '250px'}}
    >
      <GoogleLoginBtn />
      <FacebookLoginBtn />
    </div>
  </>
}


const SignupModal = (props: any) => {
  const [modalDisplay, setDisplay] = props.state;

  return <>
    <div
      className='user-modal'
      style={{display: modalDisplay}}
      onClick={() => setDisplay('none')}
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
        onClick={() => setDisplay('none')}
      />
        <div
          className="user-signup-section"
          style={{padding: '8px 0 10vh 0'}}
        >
          <h2> New Account </h2>
          <div
            className="user-form-container"
            style={{flexDirection: 'column'}}
          >
            <form id='user-form-register' className='user-form'>
              <EmailForm />
            </form>
          </div>
        </div>
    </div>
  </>
}


export default SignupModal;
