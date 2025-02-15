import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from '../../assets/dummy-data/navLinks'

const SideBar = () => {
    return <div className="sidebar">
        <div className="sidebar_top">
            <h2><i class="ri-camera-fill"></i>UberX</h2>
        </div>

        <div className="sidebar__content">
            <div className="menu">
                <ul className="nav__list">
                    {navLinks.map((item,index) => (
                        <li className="nav__item"><NavLink to={item.path}>
                        <span><i className={item.icon}></i></span>  {item.display}
                        </NavLink></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
};

export default SideBar;
