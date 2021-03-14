import './user-btn.css';
import SignupModal from './user-modals/signup-modal';


const SignupBtn = () => {
  return <>
    <button
      id="signup-btn"
      className="user-btn"
    >
      Sign Up
    </button>
    <SignupModal />
  </>
}


export default SignupBtn;
