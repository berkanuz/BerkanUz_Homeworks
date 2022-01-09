function PaymentMethods({ setSelectedPaymentMethod }) {
    return (
        <>

            <div class="checkout-payment">
                <ul>
                    <li>
                        <input type="radio" name="pm" defaultChecked onClick={() => setSelectedPaymentMethod("Kredi Kartı")} />
                        <label>Kredi Kartı</label>
                    </li>
                    <li>
                        <input type="radio" name="pm" onClick={() => setSelectedPaymentMethod("Havale")} />
                        <label>Havale</label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PaymentMethods