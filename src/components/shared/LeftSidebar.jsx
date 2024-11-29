import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./LeftSidebar.scss";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useModal } from "../../ModalContext"; // Import modal context
import GamenewsLogo from "../../assets/gamenews-logo.svg";
import { navItems } from "./navItems";

const LeftSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { showModal, hideModal, activeModal } = useModal(); // Include activeModal from context
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setExpanded(window.innerWidth > 1200);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (item) => {
        if (item.modal) {
            // Toggle modal: close if already active
            if (activeModal === item.eventKey) {
                hideModal();
            } else {
                showModal(item.eventKey);
            }
        } else {
            hideModal(); // Close the modal for regular links
            navigate(item.eventKey); // Navigate to the selected page
        }
    };

    const handleLogoClick = () => {
        hideModal(); // Close the modal when clicking the logo
        navigate("/"); // Navigate to the home page
    };

    return (
        <SideNav
            expanded={expanded}
            onToggle={(isExpanded) => setExpanded(isExpanded)}
            className="custom-sidenav"
            onSelect={(selected) => {
                if (location.pathname !== selected) navigate(selected);
            }}
        >
            <div className="custom-sidenav-container">
                <SideNav.Nav selected={location.pathname}>
                    <div
                        className="logo"
                        onClick={handleLogoClick} // Close modal and navigate
                        style={{ cursor: "pointer" }}
                    >
                        <img src={GamenewsLogo} alt="Game News Logo" />
                    </div>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.eventKey}
                            eventKey={item.eventKey}
                            onClick={() => handleClick(item)} // Updated to toggle modal
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
