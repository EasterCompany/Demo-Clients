// Node modules imports
import { useState, SyntheticEvent } from 'react';

// Local app imports
import './modal.css';
import Loader from '../../loading/loading';
import ForgotPassword from './forgot-modal';
import GoogleLoginBtn from '../google-login';
import FacebookLoginBtn from '../facebook-login';
import userLoginForm from '../../../library/user/login';
import arrowImg from '../../../assets/icons/arrow.svg';
import closeImg from '../../../assets/icons/close2.svg';


const LoginModal = (props: any) => {
  const [modalDisplay, setDisplay] = props.state;
  const [loginDisplay, setLogin] = useState('flex');
  const [forgotDisplay, setForgot] = useState('none');
  const [loadDisplay, setLoader] = useState('none');

  const hideModal = () => {
    setDisplay('none');
    setForgot('none');
    setLogin('flex');
  }

  const showForgot = () => {
    setForgot('flex');
    setLogin('none');
  }

  const hideForgot = () => {
    setForgot('none');
    setLogin('flex');
  }

  const formSubmit = async (event: SyntheticEvent) => {
    // Prevent Form Submission
    event.preventDefault();
    // Fetch User Email
    const loginEmail =
      document.getElementById('user-login-email') as HTMLInputElement;
    // Fetch User Password
    const loginPassword =
      document.getElementById('user-login-password') as HTMLInputElement;
    // Submit User Input
    setLoader('flex');
    userLoginForm(loginEmail.value, loginPassword.value, setLoader)
  }

  const LoginSection = () => {
    return <div
      className="user-login-section"
      style={{display: loginDisplay}}
    >
      <h1> Login </h1>
      <div className='user-form-container'>
        <Loader state={loadDisplay} />
        <form
          className='user-form'
          onSubmit={formSubmit}
        >
          <h1> eProfile </h1>
          <p
            id='login-error-message'
            className='error-message'
          >
            Invalid email & password combination.
          </p>
          <input
            id='user-login-email'
            type='email'
            placeholder='email'
          />
          <input
            id='user-login-password'
            type='password'
            placeholder='password'
          />
          <button>
            <img
              src={arrowImg}
              alt='login'
              width="28px"
              height="100%"
            />
            LOGIN
          </button>
          <div
            className='user-forgot'
            onClick={showForgot}
          > forgot password </div>
        </form>
        <div className='user-form-divider'/>
        <div className='user-form-social'>
          <GoogleLoginBtn />
          <FacebookLoginBtn />
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
      id='user-login-modal'
      className='user-modal-content'
      style={{display: modalDisplay}}
    >
      <img
        className='modal-close-button'
        src={closeImg}
        alt='close'
        onClick={hideModal}
      />
      <LoginSection />
      <ForgotPassword state={[forgotDisplay, hideForgot]} />
    </div>
  </>
}


export default LoginModal;
