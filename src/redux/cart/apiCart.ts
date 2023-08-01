import { apiSlice } from "../api/apiSlice";

const apiCart = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToDbCart: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (payload) => ({
        url: `wishlists`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["wishlish"],
    }),
    deleteFromDBCart: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (payload) => ({
        url: `wishlists`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["wishlish"],
    }),
    getfromDbCart: builder.query({
      // note: an optional `queryFn` may be used in place of `query`
      query: (email) => `/wishlists/${email}`,
      providesTags: ["wishlish"],
    }),
  }),
});
export const {
  useAddToDbCartMutation,
  useDeleteFromDBCartMutation,
  useGetfromDbCartQuery,
} = apiCart;
