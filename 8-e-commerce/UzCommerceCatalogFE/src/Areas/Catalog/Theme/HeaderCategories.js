import { useEffect, useState } from "react";
import axios from 'axios';


function HeaderCategories() {
    const [categories, setCategories] = useState([]);
    const getCategories = () => {
        axios.get('https://localhost:44306/api/catalog/categories')
            .then(response => {
                setCategories(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => { getCategories(); }, [])

    return (
        <div className="navbar-collapse collapse navbar-right" id="navbar">
            <ul className="nav navbar-nav">
                {categories && categories.map((category) => (
                    <li className="" key={category.id}>
                        <a href={`/products?categoryId=${category.id}`}>{category.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderCategories;