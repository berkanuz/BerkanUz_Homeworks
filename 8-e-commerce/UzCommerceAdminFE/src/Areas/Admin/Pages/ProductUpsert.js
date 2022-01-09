import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProductUpsert() {
    const [product, setProduct] = useState({})
    const [title, setTitle] = useState("Yeni Ürün Ekle")
    const [categories, setCategories] = useState([])
    const { productId } = useParams();
    useEffect(() => {
        getCategories()
        if (productId !== undefined) {
            getProduct(productId)
        }
        else {
            setProduct({ id: 0, name: "", price: 0, pictureUrl: "", categoryId: 0 })
        }
    }, [])

    function getProduct(productId) {
        var url = `https://localhost:44306/api/Products/${productId}`
        axios.get(url).then(response => {
            let product = response.data.data;
            setProduct(product)
            setTitle(product.name)
        })
    }

    function getCategories() {
        var url = `https://localhost:44306/api/categories`
        axios.get(url).then(response => {
            setCategories(response.data.data)
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function handleSubmit() {
        if (product.id > 0) {
            updateProduct()
        }
        else {
            createProduct()
        }
    }

    function createProduct() {
        var url = `https://localhost:44306/api/Products`
        axios.post(url, product).then(response => {
            let product = response.data.data;
            setProduct(product)
            alert(response.data.message)
            window.history.pushState("", "", "/admin/ProductUpsert/"+product.id)
        }).catch(error => error)
    }

    function updateProduct() {
        var url = `https://localhost:44306/api/Products/${product.id}`
        axios.put(url, product).then(response => {
            alert(response.data.message)
        }).catch(error => error)
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
                        {title}
                    </span>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label>Ürün Adı : </label>
                        <input onChange={handleChange} value={product.name} name="name" className="form-control" type="text" placeholder="Ürün Adı" />
                    </div>
                    <div className="mb-3">
                        <label>Ürün fiyatı : </label>
                        <input onChange={handleChange} value={product.price} name="price" className="form-control" type="number" step="0.01" placeholder="Ürün fiyatı" />
                    </div>
                    <div className="mb-3">
                        <label>Ürün resin URL'i : </label>
                        <input onChange={handleChange} value={product.pictureUrl} name="pictureUrl" className="form-control" type="text" placeholder="Ürün resin URL'i" />
                    </div>
                    <div className="mb-3">
                        <label>Ürün Kategorisi</label>
                        <select className="form-control" onChange={handleChange} value={product.categoryId} name="categoryId" >
                            <option value="0">Kategori Seçiniz</option>
                            {categories && (categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>))}
                        </select>
                    </div>
                    <button className="btn btn-success btn m-2" onClick={() => handleSubmit()}>Kaydet</button>
                    <Link to={{ pathname: "/admin/products" }} className="btn btn-danger btn">İptal</Link>
                </div>
            </div>
        </>
    );
}

export default ProductUpsert