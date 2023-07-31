import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://bookshop-backend.vercel.app/api/v1/
export const apiSlice = createApi({
   reducerPath: "apidata",
   baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api/v1/` }),
   tagTypes: ['readlist'],
   endpoints: (builder) => ({
      getAllProducts: builder.query({
         query: (limit) => `/products?limit=${limit}`
      }),
      getSingleProduct: builder.query({
         query: (id) => `/products/${id}`
      })
   })
});
export const { useGetAllProductsQuery, useGetSingleProductQuery } = apiSlice