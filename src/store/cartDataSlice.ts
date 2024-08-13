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
      const item = state.items.find((i) => i.id === action.payload.id);
      console.log(state.items, action.payload);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // addItem(state, action) {
    //   const { name, price, imageUrl } = action.payload;

    //   console.log(action.payload);
    // },
  },
});

export const { addItem } = cartState.actions;
export default cartState.reducer;
