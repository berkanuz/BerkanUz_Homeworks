import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CategoryUpsert() {
    const [category, setCategory] = useState({})
    const [title, setTitle] = useState("Yeni Kategori Ekle")
    const { categoryId } = useParams();
    useEffect(() => {
        if (categoryId !== undefined) {
            getCategory(categoryId)
        }
        else {
            setCategory({ id: 0, name: "", description: "" })
        }
    }, [])

    function getCategory(categoryId) {
        var url = `https://localhost:44306/api/categories/${categoryId}`
        axios.get(url).then(response => {
            let category = response.data.data;
            setCategory(category)
            setTitle(category.name)
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function handleSubmit() {
        if (category.id > 0) {
            updateCategory()
        }
        else {
            createCategory()
        }
    }

    function createCategory() {
        var url = `https://localhost:44306/api/categories`
        axios.post(url, category).then(response => {
            let category = response.data.data;
            console.log(category)
            setCategory(category)
            alert(response.data.message)
            window.history.pushState("", "", "/admin/CategoryUpsert/"+category.id)
        }).catch(error => error)
    }

    function updateCategory() {
        var url = `https://localhost:44306/api/categories/${category.id}`
        axios.put(url, category).then(response => {
            alert(response.data.message)
        }).catch(error => error)
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
                        {title}
                    </span>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label>Kategori Adı : </label>
                        <input onChange={handleChange} value={category.name} name="name" className="form-control" type="text" placeholder="Kategoi Adı" />
                    </div>

                    <div className="mb-3">
                        <label>Kategori Açıklaması : </label>
                        <input onChange={handleChange} value={category.description} name="description" className="form-control" type="text" placeholder="Kategori Açıklaması" />
                    </div>
                    <button className="btn btn-success btn m-2" onClick={() => handleSubmit()}>Kaydet</button>
                    <Link to={{ pathname: "/admin/categories" }} className="btn btn-danger btn">İptal</Link>
                </div>
            </div>
        </>
    );
}

export default CategoryUpsert