

const ForgotPassword = (props: any) => {
  const [forgotDisplay, hideForgot] = props.state;

  return <div
    className="user-login-section"
    style={{display: forgotDisplay}}>
    <h1> Recover Account </h1>
    <form
      className="user-form"
      style={{
        height: "75%"
      }}
    >
      <p style={{maxWidth: '450px', padding: '0 5% 0 5%'}}>
        Enter the email address used for your account
        and we will send you a link to change your
        password and recover your account.
      </p>
      <input
        type="email"
        placeholder="email"
        style={{maxWidth: '600px'}}
      />
      <button>submit</button>
      <div
        className='user-forgot'
        onClick={hideForgot}
      > login instead </div>
    </form>
  </div>
}


export default ForgotPassword;
