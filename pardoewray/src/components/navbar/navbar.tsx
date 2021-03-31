import './navbar.css';

const navMenuOpen = () => {
  const navbar = document.querySelector('#navbar') as HTMLDivElement;
  const navbtn = document.querySelector('#nav-menu-button') as HTMLDivElement;
  navbar.className = 'navbar-menu-open';
  navbtn.className = 'nav-menu-button-open';
}

const navMenuClose = () => {
  const navbar = document.querySelector('#navbar') as HTMLDivElement;
  const navbtn = document.querySelector('#nav-menu-button') as HTMLDivElement;
  navbar.className = 'navbar-menu';
  navbtn.className = 'nav-menu-button';
}

const Navbar = () => {
  return <div id="nav-header">
    <div id="header" />
    <div id="navbar" className="navbar-menu" onClick={navMenuClose}>
      <button> Home </button>
      <button> Client </button>
      <button> Candidate </button>
      <button> About Us </button>
    </div>
    <div
      id="nav-menu-button"
      className="nav-menu-button"
      onClick={navMenuOpen}
    />
  </div>
};


export default Navbar;
