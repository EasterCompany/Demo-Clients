import './header.css';
import LoginBtn from '../../shared/components/user-btns/login-btn';
import SignupBtn from '../../shared/components/user-btns/signup-btn';

const Header = () => {
  return <div id='header'>

    <div id='header-left'>
      <SignupBtn />
    </div>

    <div id='header-title'>
      <h1> App Browser </h1>
      select an application
    </div>

    <div id='header-right'>
      <LoginBtn />
    </div>

  </div>
}

export default Header;
