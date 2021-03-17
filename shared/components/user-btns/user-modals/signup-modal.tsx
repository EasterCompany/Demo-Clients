// Local app imports
import './modal.css';
import closeImg from '../../../assets/icons/close2.svg';


const SignupModal = (props: any) => {
  const [modalDisplay, setDisplay] = props.state;

  const hideModal = () => {
    setDisplay('none');
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
        <div className='user-form'>
          <h2> Email </h2>
          <input type="email" placeholder="Enter your email address" />
          <h2> Password </h2>
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
          <h2> Date of Birth </h2>
          <input type="date" />
          <button type="submit"> Submit </button>
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
