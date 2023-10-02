import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyBooks</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                     

                    </ul>
                    <form className="d-flex input-group w-auto">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className='search-button'>
                            <BiSearchAlt2 />
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
