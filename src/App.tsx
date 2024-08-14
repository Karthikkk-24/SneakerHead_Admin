import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PublicRoute from './pages/PublicRoute';

function App() {
    return (
        <div className="bg-slate-100 w-screen min-h-screen">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
