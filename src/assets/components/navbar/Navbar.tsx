import { logo } from '@images/index';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
    </div>
  );
}
