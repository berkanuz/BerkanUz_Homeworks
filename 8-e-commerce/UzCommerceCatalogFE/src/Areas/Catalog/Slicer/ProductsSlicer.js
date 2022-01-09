import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Data: []
}

export const ProductsSlicer = createSlice({
    name: 'ProductsSlicer',
    initialState,
    reducers: {
        GetProducts: (state, {payload}) => {
            state.Data = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { GetProducts } = ProductsSlicer.actions

export default ProductsSlicer.reducer