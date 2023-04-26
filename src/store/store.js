import { configureStore } from "@reduxjs/toolkit"
import useSlice from "./useSlice"
import todoSlice from "./todoSlice"
import themeSlice from "./themeSlice"

export const store = configureStore({
    reducer : {
      user : useSlice,
      todo : todoSlice,
      theme : themeSlice
    }
})


