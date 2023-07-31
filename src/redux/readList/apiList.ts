import { apiSlice } from "../api/apiSlice";

const apiList = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      addToDbList: builder.mutation({
         // note: an optional `queryFn` may be used in place of `query`
         query: (payload) => ({
            url: `reads`,
            method: 'POST',
            body: payload,
         }),
         invalidatesTags: ['readlist'],
      }),
      getfromDbList: builder.query({
         // note: an optional `queryFn` may be used in place of `query`
         query: (email) => (`/reads/${email}`),
         providesTags: ['readlist'],
      })
   })
})
export const {
   useAddToDbListMutation,
   useGetfromDbListQuery
} = apiList