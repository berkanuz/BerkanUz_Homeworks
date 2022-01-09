import { useSelector } from 'react-redux'
import ProductFilters from "../Components/ProductFilters";
import ProductList from '../Components/ProductList';
function Products() {
    const products = useSelector((state) => state.ProductsSlicer.Data)
    return (
        <>

            <div id="product-section" className="product-section container-fluid no-padding" style={{ marginTop: "40px" }}>
                <div className="container">
                    <div className="row">
                        <ProductFilters />
                        {products && (
                            <ProductList products={products} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products