import { configureStore } from "@reduxjs/toolkit";
import ReduxCounterSlice from "./Slices/ReduxCounterSlice";

const store = configureStore({
  name: "store",
  reducer: {
    ReduxCounter: ReduxCounterSlice,
  },
});

export default store;
