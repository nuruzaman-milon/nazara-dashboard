import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "@/services/contactApi";
import { categoriesApi } from "@/services/categoryApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware).concat(categoriesApi.middleware),
});
