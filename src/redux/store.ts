import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import resetPasswordSlice from "./slices/resetPasswordSlice";

const store = configureStore({
    reducer: {
        resetPassword: resetPasswordSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
