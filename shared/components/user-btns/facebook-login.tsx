import FacebookLogin from 'react-facebook-login';


const facebookResponse = (response: any) => {
    console.log(response)
}


const FacebookLoginBtn = () => {
    return <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={facebookResponse}
        callback={facebookResponse}
    />
}


export default FacebookLoginBtn;
