import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSidebar from './components/shared/LeftSidebar';
import { Home } from './pages/Home';
import Create from './pages/Create';
import Groups from './pages/Groups';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Discover from './pages/discover/Discover';
import Settings from './pages/Settings';
import News from './pages/News';
import LoginRegister from './pages/LoginRegister';
import Bottombar from './components/shared/Bottombar';
import Topbar from './components/shared/Topbar';
import Search from './pages/Search';



function App() {
    return (
        <div>
        <Router>
            
            <Topbar />
            <LeftSidebar />
            <Bottombar />
            <main>
            <Search />
                <Routes>
                    <Route path="/login" element={<LoginRegister/>} />
                    <Route path="/news" element={<News />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route index element={<Home />} />
                    {/* Fallback route */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
        </Router>

        </div>
    );
}

export default App;
