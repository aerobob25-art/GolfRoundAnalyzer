import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homepage';
import { NewRoundPage } from './pages/newround';

function App() {
    return (
    <BrowserRouter>
        <div>
            <h1>Golf Round Analyzer</h1>
            <Outlet />
            <nav>
                <Link className="link-styles" to="/">Home</Link>
                <Link className="link-styles" to="/new-round">New Round</Link>
            </nav>
        </div>
        
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-round" element={<NewRoundPage />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;