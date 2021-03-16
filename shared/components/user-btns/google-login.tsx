import { GoogleLogin } from 'react-google-login';
import googlePlayLogo from '../../assets/icons/google-play.svg';


const responseGoogle = (response: any) => {
  console.log(response);
}


const GoogleLoginBtn = () => {
  return <GoogleLogin
    clientId=
      "836144713723-tgicgj0aov4vt91a2r4s3033t4n4qqi6.apps.googleusercontent.com"
    render={ (renderProps: any) => (
      <button
        className="social-login-btn"
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}>
          <img
            width="24px"
            height="24px"
            src={googlePlayLogo} alt='google play'
          />
          <div style={{textAlign: 'center', width:'100%'}}> Google Login </div>
      </button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
}


export default GoogleLoginBtn
