import React from 'react'
import { NavLink } from 'react-router-dom'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Event from './Event';
import RightSide from './RightSide';

const LeftSide = ({ children }) => {
    return (
        <div className="page">
            <div className="left-side">
                <div className="nav1">
                {/* <NavLink to="/event" className="cover">
                        <span><i className='bx bx-objects-vertical-bottom bx-sm icon-stat'></i></span>
                        <span className="team">Event</span>
                    </NavLink> */}
                    <NavLink to="/" className="link cover">
                        <span><i className='bx bxl-blogger bx-sm'></i></span>
                        <span className="cover-text">admin dashboard page</span>
                    </NavLink>
                </div>
                <div className="nav1">
                    <NavLink to="/event" className="link">
                        <span><i className='bx bx-objects-vertical-bottom bx-sm icon-stat'></i></span>
                        <span className="team">Event</span>
                    </NavLink>
                </div>
                <div className="nav1 teams">
                    <NavLink to="/" className="link">
                        <span><i className='bx bxs-group bx-sm group-icon' ></i></span>
                        <span className="team">Teams</span>
                    </NavLink>
                </div>
                <div className="nav1">
                    <NavLink to="/" className="link">
                        <span><i className='bx bx-stats bx-sm icon-left'></i></span>
                        <span>Analytics</span>
                    </NavLink>
                </div>
                <div className="nav1">
                    <NavLink to="/" className="link">
                        <span><i className='bx bxs-envelope bx-sm env-icon'></i></span>
                        <span>Results</span>
                    </NavLink>
                </div>
            </div>
            <main>
                {children}
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/event" element={<Event />} />
                </Routes>
            </main>
            <div>
                <RightSide/>
            </div>
        </div>
    )
}

export default LeftSide
