import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import toastReducer from '../features/toast/toastSlice'

export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        toastData: toastReducer
    }
})