// src/navItems.js
import Create from '../../assets/create.svg';
import profileCat from '../../assets/profile-cat.webp';

export const navItems = [
  { eventKey: "/search", icon: "fa-solid fa-magnifying-glass", text: "Search", modal: true },
  { eventKey: "/notifications", icon: "fa-regular fa-heart", text: "Notifications", modal: true },
  { eventKey: "/discover", icon: "fa-regular fa-compass", text: "Discover" },
  { eventKey: "/messages", icon: "fa-regular fa-comment", text: "messages" },
  { eventKey: "/create", icon: null, text: "Create", image: Create },
  { eventKey: "/groups", icon: "fa-solid fa-user-group", text: "Groups" },
  { eventKey: "/news", icon: "fa-regular fa-newspaper", text: "News" },
  { eventKey: "/profile", icon: null, text: "Profile", image: profileCat, className:"profile" },
];
