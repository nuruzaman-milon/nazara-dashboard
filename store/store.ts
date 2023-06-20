import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "@/services/contactApi";
import { categoriesApi } from "@/services/categoryApi";
import { usersApi } from "@/services/userApi";
import { productsApi } from "@/services/productApi";
import  productSlice  from "@/store/slice/productSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    products: productSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware).concat(categoriesApi.middleware).concat(usersApi.middleware).concat(productsApi.middleware),
});
