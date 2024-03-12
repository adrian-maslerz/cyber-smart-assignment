import React, {ReactElement} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
const NavigationComponent = (): ReactElement => {
    const NAV = styled.nav`
        margin-bottom: 30px;
    `;
    return (
        <NAV className="navbar navbar-expand-lg bg-body-secondary">
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
        </NAV>
    )
}

export default NavigationComponent;