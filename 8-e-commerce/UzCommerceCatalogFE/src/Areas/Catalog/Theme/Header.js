import HeaderCategories from "./HeaderCategories"
import MiniCart from "./MiniCart"

function Header()
{
    return(
        <header className="header-section container-fluid no-padding">
        <div className="container-fluid no-padding menu-block">
            <div className="container">
                <nav className="navbar navbar-default ow-navigation">
                    <div className="navbar-header">
                        <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">Uz <span>Commerce</span></a>
                    </div>
                    <MiniCart/>
                    <HeaderCategories/>
                </nav>
            </div>
        </div>
    </header>
    )
}
export default Header