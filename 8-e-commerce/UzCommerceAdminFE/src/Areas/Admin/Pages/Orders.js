import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Orders() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getOrders()
    }, [])
    function getOrders() {
        var url = `https://localhost:44306/api/order`
        axios.get(url).then(response => {
            setOrders(response.data.data)
        })
    }

    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Sipariş Yönetimi</h1>
            </div>
            <div className="card mb-4 me-4" style={{ marginLeft: "20px" }}>
                <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>
                        <i className="fas fa-table me-1"></i>
                        Siparişler
                    </span>
                </div>
                <div className="card-body">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>İsim - Soyisim</th>
                                <th>Sipariş Tarihi</th>
                                <th>Tutar</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && (
                                orders.map(order => (
                                    <tr key={order.orderId}>
                                        <td>{order.orderId}</td>
                                        <td>{order.addressModel.name} {order.addressModel.surname}</td>
                                        <td>{order.createdDate}</td>
                                        <td>{order.totalText}</td>
                                        <td align="right">
                                            <Link to={{pathname:`/admin/orders/${order.orderId}`}} className="btn btn-warning me-2">Detaylar</Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Orders