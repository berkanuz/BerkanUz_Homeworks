import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
    }, [])
    function getProducts() {
        var url = `https://localhost:44306/api/Products`
        axios.get(url).then(response => {
            setProducts(response.data)
        })
    }

    function handleDelete(productId) {
        var url = `https://localhost:44306/api/Products/${productId}`;
        if (window.confirm("Emin misiniz?") === true) {
            axios.delete(url).then(response => {
                getProducts()
                alert(response.data.message)
            })
            .catch(error => error)
        }
    }

    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Ürün Yönetimi</h1>
            </div>
            <div className="card mb-4 me-4" style={{ marginLeft: "20px" }}>
                <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>
                        <i className="fas fa-table me-1"></i>
                        Ürünler
                    </span>
                    <Link to={{pathname:"/admin/ProductUpsert"}} className="btn btn-primary pull-right">Yeni Ürün Ekle</Link>
                </div>
                <div className="card-body">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ürün Adı</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && (
                                products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td align="right">
                                            <Link to={{pathname:`/admin/ProductUpsert/${product.id}`}} className="btn btn-warning me-2">Edit</Link>
                                            <button onClick={() => handleDelete(product.id)} className="btn btn-danger">X</button>
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

export default Products