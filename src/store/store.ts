import { configureStore } from "@reduxjs/toolkit";
import cartStateReducer from "./cartDataSlice";

const store = configureStore({
  reducer: {
    cartState: cartStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
