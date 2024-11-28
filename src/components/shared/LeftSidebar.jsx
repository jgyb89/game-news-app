import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './LeftSidebar.scss'; // Import custom styles
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useModal } from '../../ModalContext'; // Import modal context
import GamenewsLogo from '../../assets/gamenews-logo.svg';
import { navItems } from './navItems';

const LeftSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { showModal } = useModal(); // Access modal functionality
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setExpanded(window.innerWidth > 1200);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = (isExpanded) => {
        setExpanded(isExpanded);
    };

    const handleClick = (item) => {
        if (item.modal) {
            showModal(item.eventKey); // Open the modal for modal-enabled items
        } else {
            navigate(item.eventKey); // Navigate for regular items
        }
    };

    return (
        <SideNav
            expanded={expanded}
            onToggle={handleToggle}
            className="custom-sidenav"
            onSelect={(selected) => {
                if (location.pathname !== selected) navigate(selected);
            }}
        >
            <div className="custom-sidenav-container">
                <SideNav.Nav selected={location.pathname}>
                    <div
                        className="logo"
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={GamenewsLogo} alt="Game News Logo" />
                    </div>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.eventKey}
                            eventKey={item.eventKey}
                            onClick={() => handleClick(item)} // Updated to use handleClick
                            className="nav-link"
                        >
                            <NavIcon>
                                {item.icon ? (
                                    <div className="nav-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                ) : (
                                    <div className="nav-icon">
                                        <img src={item.image} alt={item.text} />
                                    </div>
                                )}
                            </NavIcon>
                            <NavText>
                                <p className="nav-text">{item.text}</p>
                            </NavText>
                        </NavItem>
                    ))}
                </SideNav.Nav>
            </div>
        </SideNav>
    );
};

export default LeftSidebar;
