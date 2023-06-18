import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Contact {
  _id: string;
  message: string;
  status: string;
  user: {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    refund: number;
  };
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/api/v1/contact",
    }),
    contact: builder.query<Contact, string>({
      query: (id) => `/api/v1/contact/${id}`,
    }),
  }),
});

export const { useContactsQuery, useContactQuery } = contactsApi;
