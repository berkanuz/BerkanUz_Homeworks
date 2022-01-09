import { Link } from "react-router-dom"

function Menu() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Menu</div>
                        <Link className="nav-link" to={{ pathname: "/admin" }}>
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Ana Sayfa
                        </Link>
                        
                        <Link className="nav-link" to={{ pathname: "/admin/products" }}>
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Ürün Yönetimi
                        </Link>
                        
                        <Link className="nav-link" to={{ pathname: "/admin/categories" }}>
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Kategori Yönetimi
                        </Link>
                        
                        <Link className="nav-link" to={{ pathname: "/admin/orders" }}>
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Sipariş Yönetimi
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Menu