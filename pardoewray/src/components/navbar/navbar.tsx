// Component imports
import './navbar.css';
import { Link } from "../../shared/components/routes/routes";


const navbarClick = (forceClose=false) => {
  // Fetch objects
  const btn = document.querySelector('#navbar-menu-button') as HTMLElement;
  const menu = document.querySelector('#navbar') as HTMLElement;
  // Toggle menu & button
  if (btn?.className === 'navbar-menu-open' || forceClose) {
    btn.className = 'navbar-menu-closed';
    menu.className = 'navbar-closed';
    return;
  }
  btn.className = 'navbar-menu-open';
  menu.className = 'navbar-open';
  return;
}


const Navbar = () => {
  return <div id="nav-header">
    <div id="header" />
    <nav
      id="navbar"
      className="navbar-closed"
      onClick={() => navbarClick(true)}
    >
      <Link to="" name="Home" />
      <Link to="client" name="Client" />
      <Link to="candidate" name="Candidate" />
      <Link to="jobs" name="Jobs" />
    </nav>
    <div
      id="navbar-menu-button"
      className="navbar-menu-closed"
      onClick={() => navbarClick(false)}
    />
  </div>
};


export default Navbar;
