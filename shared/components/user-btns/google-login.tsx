import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response: any) => {
  console.log(response);
}


const GoogleLoginBtn = () => {
    return <GoogleLogin
        clientId=
            "836144713723-tgicgj0aov4vt91a2r4s3033t4n4qqi6.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
}


export default GoogleLoginBtn
