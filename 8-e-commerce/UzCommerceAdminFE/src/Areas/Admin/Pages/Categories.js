import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
    }, [])
    function getCategories() {
        var url = `https://localhost:44306/api/categories`
        axios.get(url).then(response => {
            setCategories(response.data.data)
        })
    }

    function handleDelete(categoryId) {
        var url = `https://localhost:44306/api/categories/${categoryId}`;
        if (window.confirm("Emin misiniz?") === true) {
            axios.delete(url).then(response => {
                getCategories()
                alert(response.data.message)
            })
            .catch(error => error)
        }
    }

    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Kategori Yönetimi</h1>
            </div>
            <div className="card mb-4 me-4" style={{ marginLeft: "20px" }}>
                <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>
                        <i className="fas fa-table me-1"></i>
                        Kategoriler
                    </span>
                    <Link to={{pathname:"/admin/CategoryUpsert"}} className="btn btn-primary pull-right">Yeni Kategori Ekle</Link>
                </div>
                <div className="card-body">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Kategori Adı</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && (
                                categories.map(category => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td align="right">
                                            <Link to={{pathname:`/admin/CategoryUpsert/${category.id}`}} className="btn btn-warning me-2">Edit</Link>
                                            <button onClick={() => handleDelete(category.id)} className="btn btn-danger">X</button>
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

export default Categories