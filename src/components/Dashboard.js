import React from 'react'
import { NavLink } from 'react-router-dom'
import Settings from './Settings'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-menu">
          <div className="dash-nav1">
            {/* <NavLink to="/" className="link "> */}
            <span className="event-set">Event settings</span>
            {/* </NavLink> */}
          </div>
          <div className="dash-menu-item">
            <NavLink to="" className="link ">
              <span className="dash-menu">General</span>
            </NavLink>
          </div>
          <div className="dash-menu-item">
            <NavLink to="" className="link">
              <span className="dash-menu">Privacy</span>
            </NavLink>
          </div>
          <div className="dash-menu-item activelink">
            <NavLink to="/" className="link">
              <span className="dash-menu item" >Features</span>
            </NavLink>
          </div>
          <div className="dash-menu-item">
            <NavLink to="/" className="link">
              <span className="dash-menu">Customization</span>
            </NavLink>
          </div>
          <div className="dash-menu-item">
            <NavLink to="/" className="link">
              <span className="dash-menu">Integration</span>
            </NavLink>
          </div>
          <div className="dash-menu-item">
            <NavLink to="/" className="link">
              <span className="dash-menu">Sessions Settings</span>
            </NavLink>
            <span><i className='bx bxs-lock' ></i></span>
          </div>
          <div className="dash-menu-item">
            <NavLink to="/" className="link">
              <span className="dash-menu">My plans</span>
            </NavLink>
          </div>
        </div>
        <div>
          <Settings />

        </div>
      </div>
    </div>
  )
}

export default Dashboard
