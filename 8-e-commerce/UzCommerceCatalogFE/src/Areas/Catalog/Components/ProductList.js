import ProductListItem from "./ProductListItem"

function ProductList({ products }) {
    return (
        <>
            {products && (
                <ul className="products" style={{ position: "relative", height: `${(parseInt((products.length - 1) / 4) + 1) * 446}px` }}>
                    {products.map((product, index) => (<ProductListItem key={product.id} product={product} index={index} />))}
                </ul>
            )}
        </>
    )
}
export default ProductList