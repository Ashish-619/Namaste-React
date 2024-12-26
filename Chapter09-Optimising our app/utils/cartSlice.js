import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    //reducer is an object which contains actions.(these actions are mapped to reducer functions)
    reducers: {
        //slice-1
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        //slice-2
        removeItem: (state) => {
            state.items.pop();
        },
        //slice-3
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;