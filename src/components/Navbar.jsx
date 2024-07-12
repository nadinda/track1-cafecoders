import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar sticky">
      <a href="/">
        <img
          src="src/assets/sipnplay.png"
          type="image/png"
          alt="sip n play logo"
        />
      </a>
      <ul className="nav-links-container">
        <li className="nav-link">
          <a href="./events" className="links">
            Events
          </a>
        </li>
        <li className="nav-link">
          <a href="/menu" className="links">
            Menu
          </a>
        </li>
        <li className="nav-link">
          <a href="/collections" className="links">
            Board Games
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
