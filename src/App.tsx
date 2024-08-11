import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PublicRoute from './pages/PublicRoute';
import Register from './pages/Register';

function App() {
    return (
        <div className="bg-background w-screen min-h-screen">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
