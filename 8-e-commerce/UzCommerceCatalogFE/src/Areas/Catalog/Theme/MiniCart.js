import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SetCart } from '../Slicer/CartSlicer'
import { DeleteFromCart, GetCart } from '../Functions/CartFunctions'
import { Link } from 'react-router-dom'
function MiniCart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.CartSlicer.Data)
    useEffect(() => {
        GetCart().then(res => dispatch(SetCart(res)))
    }, [])
    function handleDeleteItem(cartId) {
        DeleteFromCart(cartId).then(res => {
            GetCart().then(res => dispatch(SetCart(res)))
            console.log(res.message)
        }).catch(error => {
            console.log(error.response.data.errors[0])
        })
    }
    return (
        <div className="menu-icon">
            <ul className="cart">
                <li>
                    <a aria-expanded="true" aria-haspopup="true" data-toggle="dropdown" id="cart" className="btn dropdown-toggle" title="Sepet" href="/cart">
                        <i className="icon icon-ShoppingCart"></i>{cart && cart.cartItems && <span style={{marginLeft:"5px", color:"red"}}>{cart.cartItems.length}</span>}
                    </a>
                    {cart && cart.cartItems && (
                        <ul className="dropdown-menu no-padding">
                            {cart.cartItems.map(item => (
                                <li className="mini_cart_item">

                                    <a onClick={(e) => { e.preventDefault(); handleDeleteItem(item.id) }} title="Sepeten çıkar" className="remove" style={{ cursor: "pointer" }}>
                                        ×
                                    </a>
                                    <a href="#" className="shop-thumbnail">
                                        <img style={{height:"70px", width:"70px"}} className="attachment-shop_thumbnail" src={item.productPictureUrl} />
                                    </a>
                                    <span className="quantity">2 × <span className="amount">{item.productName}</span></span>
                                </li>
                            ))}
                            <li className="button">

                                <Link to={{ pathname: "/cart" }} >Sepete Git</Link>
                                <Link to={{ pathname: "/checkout" }} >Siparişi tamamla</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default MiniCart;


