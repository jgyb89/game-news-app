import { Link } from "react-router-dom";
import { navItems } from '../../navItems';
import './Bottombar.scss';

const Bottombar = () => {
  const bottomNavItems = navItems.filter(
    item => !["/notifications", "/messages"].includes(item.eventKey)
  );

  return (
    <section className="bottombar">
      <div className="bottombar-container">
        {bottomNavItems.map((item) => (
          <Link key={item.eventKey} to={item.eventKey} className="nav-icon">
            {item.icon ? (
              <i className={item.icon}></i>
            ) : (
              <img src={item.image} alt={item.text} />
            )}
          </Link>
        ))}
        <div className="profile">
          <Link to="/profile">
            <img src="/path-to-profile-image.webp" alt="Profile" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bottombar;
