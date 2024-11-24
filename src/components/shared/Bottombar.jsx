import { Link } from "react-router-dom";
import profileCat from '../../assets/profile-cat.webp';
import './Bottombar.scss';

const Bottombar = () => {
  return (
    <section className="bottombar">
      <div className="bottombar-container">
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
        <div className="profile-container">
          <Link to={'/profile'} className="profile-link">
            <img src={profileCat} alt="Profile" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bottombar