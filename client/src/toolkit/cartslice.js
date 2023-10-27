import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        total: 0
    },

    reducers: {
        addWatch: (state,action) => {
            const findedWatch = state.cartItems.find(
                (item) => item._id === action.payload._id
            )
            if(findedWatch){
                findedWatch.quantity += 1
            }
            else{
                state.cartItems.push(action.payload)
            }
            state.total += action.payload.newPrice
        },

        deleteWatch: (state,action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload._id
            );

            state.total -= action.payload.newPrice * action.payload.quantity
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );

            cartItem.quantity += 1
            state.total += cartItem.newPrice
        },

        decrease: (state,action) => {
            const cartItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );

            cartItem.quantity -= 1
            state.total -= cartItem.newPrice
            if(cartItem.quantity === 0) {
                state.cartItems = state.cartItems.filter(
                    (item) => item._id !== action.payload._id
                );
            }
        },
        reset:(state) => {
            state.cartItems = [];
            state.total = 0
        }
    }
})

export const {addWatch,deleteWatch,increase,decrease,reset} = cartSlice.actions;
export default cartSlice.reducer;