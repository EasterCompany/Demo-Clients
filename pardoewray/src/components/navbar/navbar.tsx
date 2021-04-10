// Component imports
import './navbar.css';
import { Link } from "../../shared/components/routes/routes";


const navbarClick = () => {
  // Fetch objects
  const btn = document.querySelector('#navbar-menu-button') as HTMLElement;
  const menu = document.querySelector('#navbar') as HTMLElement;
  // Toggle menu & button
  if (btn?.className === 'navbar-menu-closed') {
    btn.className = 'navbar-menu-open';
    menu.className = 'navbar-open';
  }
  else if (btn?.className) {
    btn.className = 'navbar-menu-closed';
    menu.className = 'navbar-closed';
  }
}


const Navbar = () => {
  return <div id="nav-header">
    <div id="header" />
    <nav
      id="navbar"
      className="navbar-closed"
      onClick={navbarClick}
    >
      <Link link="" name="Home" />
      <Link link="client" name="Client" />
      <Link link="candidate" name="Candidate" />
      <Link link="jobs" name="Jobs" />
    </nav>
    <div
      id="navbar-menu-button"
      className="navbar-menu-closed"
      onClick={navbarClick}
    />
  </div>
};


export default Navbar;
