import React, {ReactElement} from "react";
import {NavLink} from "react-router-dom";
import './NavigationComponent.scss'

const NavigationComponent = (): ReactElement => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/">Cat Facts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/favourites">Favourites</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationComponent;