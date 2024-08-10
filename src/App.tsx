import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import PublicRoute from './pages/PublicRoute';

function App() {
    return (
        <div className="bg-black w-screen min-h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
