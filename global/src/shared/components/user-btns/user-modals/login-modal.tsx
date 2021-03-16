import { useState } from 'react';

import './modal.css';
import ForgotPassword from './forgot-modal';
import FacebookLoginBtn from '../facebook-login';
import GoogleLoginBtn from '../google-login';
import arrowImg from '../../../assets/icons/arrow.svg';
import closeImg from '../../../assets/icons/close2.svg';


const LoginModal = (props: any) => {
  const [modalDisplay, setDisplay] = props.state;
  const [loginDisplay, setLogin] = useState('flex');
  const [forgotDisplay, setForgot] = useState('none');

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

  const LoginSection = () => {
    return <div
      className="user-login-section"
      style={{display: loginDisplay}}
    >
      <h1> Login </h1>
      <div className='user-form-container'>
        <div className='user-form-social'>
          <GoogleLoginBtn />
          <FacebookLoginBtn />
        </div>
        <div className='user-form-divider'/>
        <div className='user-form'>
          <h1> eProfile </h1>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
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
