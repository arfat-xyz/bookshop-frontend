import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://bookshop-backend.vercel.app/api/v1/
// http://localhost:5000/api/v1/
export const apiSlice = createApi({
  reducerPath: "apidata",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://bookshop-backend.vercel.app/api/v1/`,
  }),
  tagTypes: ["readlist", "wishlish", "updatebook"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ limit, search }) => {
        return `/products?limit=${limit}&searchTerm=${search}`;
      },
      providesTags: ["updatebook"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductQuery } = apiSlice;
