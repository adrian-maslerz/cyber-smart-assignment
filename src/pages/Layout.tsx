import React, {JSX} from "react";
import {Outlet} from "react-router-dom";
import NavigationComponent from "../components/navigation/NavigationComponent";

const Layout = (): JSX.Element => {
    return (<>
        <NavigationComponent></NavigationComponent>
        <div className="container-fluid">
            <Outlet />
        </div>
    </>)
}

export default Layout;