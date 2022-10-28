import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="admin">
                <span><i className='bx bx-menu-alt-left' ></i></span>
                <span>Admin Dashboard</span>
            </div>
            <div className="preview">
                <span>Preview on : <i className='bx bx-mobile' ></i> <i className='bx bx-laptop' ></i></span>
            </div>
        </header>
    </div>
  )
}

export default Navbar
