import { Outlet } from "react-router";
import Header from "./Theme/Header/Header";
import Menu from "./Theme/Menu";
import("./Theme/css/styles.css")
import("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js")



import("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js")
import("./Theme/js/scripts.js")

function Layout() {
    return (
        <div className="sb-nav-fixed">
            <Header />
            <div id="layoutSidenav">
                <Menu />
                <div id="layoutSidenav_content">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}
export default Layout;
