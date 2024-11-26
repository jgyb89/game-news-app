import { Link } from "react-router-dom";
import { navItems } from './navItems';
import './Bottombar.scss';

const Bottombar = () => {
  const bottomNavItems = navItems.filter(
    item => !["/notifications", "/messages", "/settings"].includes(item.eventKey)
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
        
      </div>
    </section>
  );
};

export default Bottombar;
