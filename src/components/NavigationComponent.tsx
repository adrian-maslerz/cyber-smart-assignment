import React, {ReactElement} from "react";
import {Link} from "react-router-dom";

const NavigationComponent = (): ReactElement => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favourites">Favourites</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationComponent;