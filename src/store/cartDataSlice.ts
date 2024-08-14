import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  }[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartState = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addItem(state, action) {
      const product = state.items.find((i) => i.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    minusOneFromQuantity(state, action) {
      const product = state.items.find((i) => i.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity--;
        }
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    totalPrice(state) {
      let total = 0;
      state.items.forEach((item) => {
        total += item.price * item.quantity;
      });
      state.total = total;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem } = cartState.actions;
export const { minusOneFromQuantity } = cartState.actions;
export const { removeItem } = cartState.actions;
export const { totalPrice } = cartState.actions;
export const { clearCart } = cartState.actions;
export default cartState.reducer;
