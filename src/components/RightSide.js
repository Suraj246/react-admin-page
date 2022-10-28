import React from 'react'
import { NavLink } from 'react-router-dom'

const RightSide = () => {
    return (
        <div>
            <div className="right-side">
                <div className="right-nav1">
                    <NavLink to="/" className="link">
                        <span className="user-img-container">
                            <img src="\img\user.jpg" alt="" className="user-img" />
                            <sup><i className='bx bxs-circle icon-circle-user'></i></sup>
                        </span>
                    </NavLink>
                </div>
                <div className="right-nav1">
                    <NavLink to="/event" className="link">
                        <span><i className='bx bxs-bell-ring icon-ring'>
                            <sup><i className='bx bxs-circle icon-circle'></i></sup>
                        </i></span>
                    </NavLink>
                </div>
                <div className="right-nav1">
                    <NavLink to="/" className="link">
                        <span><i className='bx bxs-message-rounded-dots chat-icon' >
                            <sup><i className='bx bxs-circle icon-circle-msg'></i></sup>
                        </i></span>
                    </NavLink>
                </div>
                <div className="right-nav1">
                    <NavLink to="/" className="link">
                        <span><i className='bx bx-cog  icon-right'></i></span>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default RightSide
