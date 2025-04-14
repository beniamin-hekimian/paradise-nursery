import { createSlice } from "@reduxjs/toolkit";

function round(value) {
    return Number(value.toFixed(2));
}

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalCartAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (!item) {
                state.cartItems.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
                state.totalQuantity += 1;
                state.totalCartAmount = round(state.totalCartAmount + action.payload.price);
            }
        },
        removeFromCart(state, action) {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalCartAmount = round(state.totalCartAmount - (item.quantity * item.price));
                state.cartItems = state.cartItems.filter(i => i.id !== item.id);
            }
        },
        increaseQuantity(state, action) {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.price * item.quantity;
                state.totalQuantity += 1;
                state.totalCartAmount = round(state.totalCartAmount + item.price);
            }
        },
        decreaseQuantity(state, action) {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice = item.price * item.quantity;
                state.totalQuantity -= 1;
                state.totalCartAmount = round(state.totalCartAmount - item.price);
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;