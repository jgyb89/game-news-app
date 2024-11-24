import { Link } from "react-router-dom";
import GamenewsLogo from '../../assets/gamenews-logo.svg';
import profileCat from '../../assets/profile-cat.webp';
import './Topbar.scss';

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="topbar-container">
        <Link to="/" className="logo-link">
          <img 
            src={GamenewsLogo}
            alt="logo"
          />
        </Link>

        <div className="icon-container">
        <div className="profile-container">
          <Link to={'/profile'} className="profile-link">
            <img src={profileCat} alt="Profile" />
          </Link>
        </div>
        <div className="profile-container">
          <Link to={'/profile'} className="profile-link">
            <img src={profileCat} alt="Profile" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Topbar;
