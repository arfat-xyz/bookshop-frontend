import { apiSlice } from "../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProducts: builder.mutation({
      query: (payload) => ({
        url: `products`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["updatebook"],
    }),
    deletePorducts: builder.mutation({
      query: (id) => {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updatebook"],
    }),
    updatePorducts: builder.mutation({
      query: ({ id, payload }) => {
        return {
          url: `products/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["updatebook"],
    }),
    postComment: builder.mutation({
      query: ({ id, ...payload }) => {
        return {
          url: `products/comment/${id}`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["updateSingleBook"],
    }),
  }),
});
export const {
  usePostProductsMutation,
  useDeletePorductsMutation,
  useUpdatePorductsMutation,
  usePostCommentMutation,
} = bookApi;
