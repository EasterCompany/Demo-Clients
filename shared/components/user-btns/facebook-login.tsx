import facebookLogo from '../../assets/icons/facebook.svg';


const FacebookLoginBtn = () => {
    return <button
    className="social-login-btn"
    >
      <img
        width="24px"
        height="24px"
        src={facebookLogo} alt='google play'
      />
      <div style={{textAlign: 'center', width:'100%'}}> Facebook Login </div>
  </button>
}


export default FacebookLoginBtn;
