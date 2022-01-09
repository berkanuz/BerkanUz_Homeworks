import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetCart } from "../Functions/CartFunctions";
import { useDispatch } from 'react-redux'
import { SetCart } from "../Slicer/CartSlicer";
import ProductList from "../Components/ProductList";

function OrderSummary() {

    const dispatch = useDispatch()
    const { orderId } = useParams();
    const [order, setOrder] = useState(null)
    useEffect(() => {
        var url = `https://localhost:44306/api/order/${orderId}`
        axios.get(url).then(response => {
            setOrder(response.data.data)
            GetCart().then(res => dispatch(SetCart(res)))
        })
    }, [])
    return (
        <>

            {order && (
                <div class="container-fluid no-left-padding no-right-padding woocommerce-checkout">
                    <div class="container">
                        <div class="col-md-12 col-sm-12 col-xs-12 login-block">
                            <div class="login-check">
                                <h3>Siparişiniz Alınmıştır!</h3>
                                <div class="col-md-5 col-sm-6 col-xs-6 check-details">
                                    <div class="check-detail">
                                        <h5>Tahmini Teslim Tarihi</h5>
                                        <label>{order.deliveryDate}</label>
                                    </div>
                                    <div class="check-detail">
                                        <h5>Ödenen Toplam Tutar</h5>
                                        <label>{order.totalText}</label>
                                    </div>
                                </div>
                                <div class="col-md-5 col-sm-6 col-xs-6 check-details">
                                    <div class="check-detail">
                                        <h5>Teslimat Bilgileri</h5>
                                        <label>{order.addressModel.name} {order.addressModel.surname}</label> <br />
                                        <label>{order.addressModel.phone}</label> <br />
                                        <label>{order.addressModel.addressDescription}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="checkout-form">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <h3>Siparişiniz</h3>
                                <div class="shipping-fields">
                                    <div class="checkout-order-table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Ürün</th>
                                                    <th>Birim Fiyat</th>
                                                    <th>Tutar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.orderItems.map(item => (
                                                    <tr class="cart_item">
                                                        <td class="product-name">{item.productName}</td>
                                                        <td>{item.unitPriceText}</td>
                                                        <td>{item.totalPriceText}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderSummary