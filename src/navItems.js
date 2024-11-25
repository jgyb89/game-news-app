// src/navItems.js
import Create from '../src/assets/create.svg';
import profileCat from '../src/assets/profile-cat.webp';

export const navItems = [
  { eventKey: "/sign-in", icon: "fa-solid fa-magnifying-glass", text: "Sign-in" },
  { eventKey: "/search", icon: "fa-solid fa-magnifying-glass", text: "Search" },
  { eventKey: "/news", icon: "fa-regular fa-newspaper", text: "News" },
  { eventKey: "/notifications", icon: "fa-regular fa-heart", text: "Notifications" },
  { eventKey: "/discover", icon: "fa-regular fa-compass", text: "Discover" },
  { eventKey: "/messages", icon: "fa-regular fa-message", text: "messages" },
  { eventKey: "/groups", icon: "fa-solid fa-user-group", text: "Groups" },
  { eventKey: "/create", icon: null, text: "Create", image: Create },
  { eventKey: "/profile", icon: null, text: "Profile", image: profileCat, className:"profile" },
];
