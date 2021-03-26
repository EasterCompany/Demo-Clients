import './header.css';
import LoginBtn from '../../shared/components/user-btns/login-btn';
import SignupBtn from '../../shared/components/user-btns/signup-btn';
import ProfileBtn from '../../shared/components/user-btns/profile-btn';
import MenuBtns from '../../shared/components/user-btns/menu-btns';
import isUser from '../../shared/library/user/fetchData';


const Header = () => {
  return <div id='header'>

    <div id='header-left'>
      {isUser ? <ProfileBtn /> : <SignupBtn />}
    </div>

    <div id='header-title'>
      <h1> App Browser </h1>
      select an application
    </div>

    <div id='header-right'>
      {isUser ? <MenuBtns /> : <LoginBtn />}
    </div>

  </div>
}


export default Header;
