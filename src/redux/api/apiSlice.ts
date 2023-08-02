import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// http://localhost:5000/api/v1/
export const apiSlice = createApi({
  reducerPath: "apidata",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_backend}`,
  }),
  tagTypes: ["readlist", "wishlish", "updatebook", "updateSingleBook"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ limit, search }) => {
        return `/products?limit=${limit}&searchTerm=${search}`;
      },
      providesTags: ["updatebook"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["updateSingleBook"],
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductQuery } = apiSlice;
