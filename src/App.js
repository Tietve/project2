import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Footerheader from "./footerheader";
import EventDetail from "./EventDetail";

const App = () => {
    return (
        <Router>
            <nav>
                {/* Link điều hướng giữa các trang */}
                <Link to="/">Home</Link>
                <Link to="/footerheader">navfoot</Link>
                <Link to="/EventDetail">eventdetail</Link>
            </nav>
            <Routes>
                {/* Định tuyến các trang */}
                <Route path="/" element={<HomePage />} />
                <Route path="/footerheader" element={<Footerheader />} />
                <Route path="/eventdetail" element={<EventDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
