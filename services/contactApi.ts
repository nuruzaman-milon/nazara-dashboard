import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Contact {
  status: string;
  data: Data[];
}

export interface ContactByID {
  status: string;
  data: Data;
}

interface Data {
  _id: string;
  message: string;
  status: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  refund: number;
}

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getContacts: builder.query<Contact, void>({
      query: () => `/api/v1/contact`,
    }),
    getContactByID: builder.query<ContactByID, string>({
      query: (id: string) => `/api/v1/contact/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactByIDQuery } = contactsApi;
