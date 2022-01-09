import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Data: {totalText:"selam"}
}

export const CartSlicer = createSlice({
    name: 'CartSlicer',
    initialState,
    reducers: {
        SetCart: (state, {payload}) => {
            state.Data = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { SetCart } = CartSlicer.actions

export default CartSlicer.reducer