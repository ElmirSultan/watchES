import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice.js"

export default configureStore({
    reducer: {
        cart: cartslice
    }
})