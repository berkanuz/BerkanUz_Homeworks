import { configureStore } from '@reduxjs/toolkit'
import ProductsSlicer from './Areas/Catalog/Slicer/ProductsSlicer'
import CartSlicer from './Areas/Catalog/Slicer/CartSlicer'
export const store = configureStore({
  reducer: {
    ProductsSlicer,
    CartSlicer
  },
})