import { Outlet } from "react-router";
import Header from "./Theme/Header";
import "./Theme/css/layers.css"
import "./Theme/css/lib.css"
import "./Theme/css/navigation-menu.css"
import "./Theme/css/navigation.css"
import "./Theme/css/plugins.css"
import "./Theme/css/settings.css"
import "./Theme/css/shortcode.css"
import "./Theme/css/style.css"
import Footer from "./Theme/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
}
export default Layout;
