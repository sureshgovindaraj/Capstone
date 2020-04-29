import React from 'react';  
import { NavLink } from 'react-router-dom';

const Header = React.memo(Props => {
    function handleClick(e) {
        e.preventDefault();
        var element = document.getElementsByClassName("nav-item");
        [].forEach.call(element, function(el) {
            el.classList.remove("active");
          });
        e.currentTarget.parentNode.className += " active";
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Outreach FMS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/event/list">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/event/report">Reports</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Configuration
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/feedback/roles">Roles</a>
                            <a className="dropdown-item" href="/feedback/index">Feedback Questions</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav flex-rows ml-md-auto d-none d-md-flex">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
})

export default Header;