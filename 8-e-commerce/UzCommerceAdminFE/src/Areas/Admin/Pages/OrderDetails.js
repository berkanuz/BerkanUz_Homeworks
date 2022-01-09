import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function OrderDetails() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    useEffect(() => {
        getOrder()
    }, [])
    function getOrder() {
        var url = `https://localhost:44306/api/order/${orderId}`
        axios.get(url).then(response => {
            setOrder(response.data.data)
        })
    }

    return (
        <>
            {order && (
                <>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Sipariş Yönetimi</h1>
                    </div>
                    <div className="card mb-4 me-4" style={{ marginLeft: "20px" }}>
                        <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>
                                <i className="fas fa-table me-1"></i>
                                Sipariş Detayları : {orderId}
                            </span>
                        </div>
                        <div className="card-body">
                            <div className="col-12">
                                <h2>Sipariş Numarası : {order.orderId} | {order.totalText} | {order.createdDate}</h2>
                                <h4>Sipariş Adress Bilgileri</h4>
                                <ul className="icon-list">
                                    <li><b>Müşteri Adı :</b> {order.addressModel.name} {order.addressModel.surname}</li>
                                    <li><b>Müşteri Telefonu :</b> {order.addressModel.phone}</li>
                                    <li><b>Müşteri Adresi :</b> {order.addressModel.addressDescription}</li>
                                </ul>
                            </div>
                            <div className="col-12">
                                <h4>Sipariş Ürün Bilgileri</h4>
                                <table className="table table-stripped">
                                    <thead>
                                        <tr>
                                            <th>Ürün Adı</th>
                                            <th>Birim Fiyat</th>
                                            <th>Adet</th>
                                            <th>Toplam Fiyat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.orderItems.map((item, index) =>
                                        (
                                            <tr key={index}>
                                                <td>{item.productName}</td>
                                                <td>{item.unitPriceText}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.totalPriceText}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default OrderDetails