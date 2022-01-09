import { AddToCart, GetCart } from "../Functions/CartFunctions"
import { useDispatch } from 'react-redux'
import { SetCart } from "../Slicer/CartSlicer"

function ProductListItem({ product, index }) {
    const dispatch = useDispatch()
    function handleAddToCart() {
        AddToCart(product.id).then(res => {
            GetCart().then(res => dispatch(SetCart(res)))
            console.log(res.message)
        }).catch(error => {
            console.log(error.response.data.errors[0])
        })
    }

    return (
        <>
            <li className="product design" style={{position:"absolute", left:`${index%4 * 300}px`, top:`${parseInt(index/4) * 446}px`}}>
                <a href="#">
                    <img style={{height:"300px", width:"270px"}} src={product.pictureUrl}/>
                        <h5>{product.name}</h5>
                        <span class="price">{product.priceText}</span>
                </a>
                <a style={{cursor:"pointer"}} className="addto-cart" onClick={(e) => {e.preventDefault(); handleAddToCart()}}>Sepete Ekle</a>
            </li>
        </>
    )
}
export default ProductListItem