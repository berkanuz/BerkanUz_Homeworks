import axios from "axios";
import { useState } from "react"
import { useForm } from "react-hook-form";
import Address from "../Components/Address"
import PaymentMethods from "../Components/PaymentMethods"
import { useNavigate } from "react-router-dom";

function Checkout() {
    let navigate = useNavigate();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Kredi Kartı")
    const { register, getValues } = useForm();
    function completeOrder() {
        var address = getValues()
        axios.post("https://localhost:44306/api/order", {
            address,
            selectedPaymentMethod
        })
            .then(response => {
                var data = response.data;
                var orderId = data.data.orderId
                navigate("/ordersummary/" + orderId, { replace: true });
            })
            .catch(error => error)
    }
    return (
        <>
            <div class="container-fluid no-left-padding no-right-padding woocommerce-checkout">
                <div class="container">
                    <div class="checkout-form">

                        <Address register={register} />
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <h3>Ödeme</h3>
                            <div class="shipping-fields">
                                <PaymentMethods setSelectedPaymentMethod={setSelectedPaymentMethod} />
                                <div class="place-order">
                                    <button onClick={() => completeOrder()}>Siparişi Tamamla</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout