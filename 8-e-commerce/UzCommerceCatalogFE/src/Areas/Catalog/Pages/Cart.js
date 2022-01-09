import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SetCart } from "../Slicer/CartSlicer"
import { DeleteFromCart, GetCart } from "../Functions/CartFunctions"
import { Link } from 'react-router-dom'
function Cart() {
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
        <>
            <div className="woocommerce-cart container-fluid no-left-padding no-right-padding">
                <div className="container">
                    <div className="col-md-12 col-sm-12 col-xs-12 cart-table">
                        <table className="table table-bordered table-responsive">
                            <thead>
                                <tr>
                                    <th className="product-thumbnail">Item</th>
                                    <th className="product-name">Product Name</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-unit-price">Unit Price</th>
                                    <th className="product-subtotal">Total</th>
                                    <th className="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>

                                {cart && cart.cartItems &&
                                    cart.cartItems.map(item => (
                                        <tr key={item.id} className="cart_item">
                                            <td data-title="Item" className="product-thumbnail"><a href="#">
                                                <img src={item.productPictureUrl} /></a></td>
                                            <td data-title="Product Name" className="product-name"><a href="#">{item.productName}</a></td>
                                            <td data-title="Quantity" className="product-quantity">
                                                <div className="prd-quantity" data-title="Quantity">
                                                    <input name="quantity1" value={item.quantity} className="qty" type="text" disabled />
                                                </div>
                                            </td>
                                            <td data-title="Unit Price" className="product-unit-price">{item.unitPriceText}</td>
                                            <td data-title="Total" className="product-subtotal">{item.totalPriceText}</td>
                                            <td data-title="Remove" className="product-remove">
                                                <a style={{ cursor: "pointer" }} onClick={() => handleDeleteItem(item.id)}>
                                                    <i className="icon icon-Delete"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-offset-4 col-md-4 col-sm-6 col-xs-6 coupon">
					</div>

                    <div className="col-md-4 col-sm-6 col-xs-6 cart-collaterals">
                        <div className="cart_totals">
                            <h3>Sepete Git</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Toplam</th>
                                        <td>
                                            {cart.totalText}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="wc-proceed-to-checkout">
                                <Link to={{ pathname: "/checkout" }}>Ödemeye Git</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart