
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICategory {
    status: string
    data: IData[]
  }
  
  export interface IData {
    _id: string
    name: string
    status: string
    createdAt: string
    updatedAt: string
    __v: number
  }

export const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    endpoints: (builder) => ({
      getCategories: builder.query<ICategory, void>({
        query: () => `/api/v1/category/`,
      }),
      getCategoryById: builder.query<IData, string>({
        query: (id: string) => `/api/v1/category/${id}`,
      }),
    }),
  });
  
  export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoriesApi;