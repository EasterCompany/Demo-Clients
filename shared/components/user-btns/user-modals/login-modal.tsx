import './modal.css';
import arrowImg from '../../../assets/icons/arrow.svg';
import closeImg from '../../../assets/icons/close2.svg';


const LoginModal = (props: any) => {
  const [modalDisplay, setDisplay] = props.state;
  const hideModal = () => setDisplay('none');

  return <>
    <div
      id='login-modal'
      className='user-modal'
      style={{display: modalDisplay}}
      onClick={hideModal}
    />
    <div
      id='login-modal-content'
      className='user-modal-content'
      style={{display: modalDisplay}}
    >
      <img
        className='modal-close-button'
        src={closeImg}
        alt='close'
        onClick={hideModal}
      />
      <h1> Login </h1>
      <div className='user-form-container'>
        <div className='user-form'>
          google login / facebook login / github login
        </div>
        <div className='user-form-divider'/>
        <div className='user-form'>
          <h1> eProfile </h1>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>
            <img src={arrowImg} alt='login' width="28px" height="100%" />
            LOGIN
          </button>
          <a href='/'> forgot password </a>
        </div>
      </div>
    </div>
  </>
}


export default LoginModal;
