import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductListItem from "./ProductListItem";
function NewProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:44306/api/catalog/newproducts").then(response => setProducts(response.data.data))
    })
    return (
        <>
            <div id="product-section" className="product-section container-fluid no-padding" style={{marginTop:"40px"}}>
                <div className="container">
                    <div className="row">
                        <div className="section-header">
                            <h3>En Yeni Ürünler</h3>
                            <img src="images/section-seprator.png" alt="section-seprator" />
                        </div>
                        {products && (
                            <ProductList products={products}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewProducts;