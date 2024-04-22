import { configureStore } from "@reduxjs/toolkit"
import { moviesApi } from "./hooks"

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      moviesApi.middleware,
    ]),
})

export default store