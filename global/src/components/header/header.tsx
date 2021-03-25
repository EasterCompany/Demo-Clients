import './header.css';
import LoginBtn from '../../shared/components/user-btns/login-btn';
import SignupBtn from '../../shared/components/user-btns/signup-btn';
import ProfileBtn from '../../shared/components/user-btns/profile-btn';
import MenuBtns from '../../shared/components/user-btns/menu-btns';
import isUser from '../../shared/library/user/fetchData';


const HeaderLeft = () => {
  const InnerContent = () => {
    if (isUser()) return <ProfileBtn />
    return <SignupBtn />
  }
  return <div id='header-left'>
    <InnerContent />
  </div>
}


const HeaderRight = () => {
  const InnerContent = () => {
    if (isUser()) return <MenuBtns />
    return <LoginBtn />
  }
  return <div id='header-right'>
    <InnerContent />
  </div>
}


const Header = () => {
  return <div id='header'>
    <HeaderLeft />
    <div id='header-title'>
      <h1> App Browser </h1>
      select an application
    </div>
    <HeaderRight />
  </div>
}


export default Header;
