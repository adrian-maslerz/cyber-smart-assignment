import React, {JSX} from "react";
import {Outlet} from "react-router-dom";
import NavigationComponent from "../components/NavigationComponent";

const Layout = (): JSX.Element => {
    return (<>
        <NavigationComponent></NavigationComponent>
        <Outlet />
    </>)
}

export default Layout;