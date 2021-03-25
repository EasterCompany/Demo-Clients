import './header.css';
import LoginBtn from '../../shared/components/user-btns/login-btn';
import SignupBtn from '../../shared/components/user-btns/signup-btn';
import ProfileBtn from '../../shared/components/user-btns/profile-btn';
import MenuBtns from '../../shared/components/user-btns/menu-btns';


const Header = () => {
  return <div id='header'>

    <div id='header-left'>
      <SignupBtn />
      <ProfileBtn />
    </div>

    <div id='header-title'>
      <h1> App Browser </h1>
      select an application
    </div>

    <div id='header-right'>
      <LoginBtn />
      <MenuBtns />
    </div>

  </div>
}


export default Header;
