import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSearchParams } from "react-router-dom";
import { GetProducts } from "../Slicer/ProductsSlicer"

function ProductFilters() {
    const qs = require('qs')
    let [searchParams, setSearchParams] = useSearchParams();
    let categoryId = searchParams.get("categoryId");
    const dispatch = useDispatch()


    let filterModel =
    {
        orderByType: 1,
        categoryId: categoryId
    }
    useEffect(() => {
        renderFilterModel()
    }, [])
    function renderFilterModel() {
        var url = `https://localhost:44306/api/catalog/products`
        axios.get(url, {
            params: filterModel,
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        }).then(response => {
            dispatch(GetProducts(response.data.data));

        })
    }

    function handleChange(orderByType) {
        filterModel.orderByType = orderByType;
        renderFilterModel()
    }
    return (
        <>
            <ul id="filters" class="products-categories no-left-padding">
                <li><a style={{cursor:"pointer"}} onClick={(e)=> {e.preventDefault(); handleChange(1)}}>Fiyat Artan</a></li>
                <li><a style={{cursor:"pointer"}} onClick={(e)=> {e.preventDefault(); handleChange(2)}}>Fiyat Azalan</a></li>
                <li><a style={{cursor:"pointer"}} onClick={(e)=> {e.preventDefault(); handleChange(3)}}>İsim (A-Z)</a></li>
                <li><a style={{cursor:"pointer"}} onClick={(e)=> {e.preventDefault(); handleChange(4)}}>İsim (Z-A)</a></li>
            </ul>
        </>
    )
}

export default ProductFilters