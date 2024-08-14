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
  },
});

export const { addItem } = cartState.actions;
export default cartState.reducer;
