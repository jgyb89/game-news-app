import { Link } from "react-router-dom";
import GamenewsLogo from '../../assets/gamenews-logo.svg';
import { navItems } from './navItems'; // Import navigation items
import './Topbar.scss';

const Topbar = () => {
  const notifications = navItems.find(item => item.eventKey === "/notifications");
  const messages = navItems.find(item => item.eventKey === "/messages"); // Assuming Messages exist

  return (
    <section className="topbar">
      <div className="topbar-container">
        <Link to="/" className="logo">
          <img src={GamenewsLogo} alt="logo" />
        </Link>
        <div className="icon-container">
          {notifications && (
            <Link to={notifications.eventKey} className="nav-icon">
              <i className={notifications.icon}></i>
            </Link>
          )}
          {messages && (
            <Link to={messages.eventKey} className="nav-icon">
              <i className={messages.icon}></i>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Topbar;
