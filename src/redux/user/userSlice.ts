import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICredentials } from "../../Types/globalTypes";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";

interface IUserDetails {
   user: {
      email: string | null;
   },
   isLoading: boolean;
   isError: boolean;
   error: null | string;
}
const initialState: IUserDetails = {
   user: {
      email: null,
   }
   , isLoading: false,
   isError: false,
   error: null,

};
export const loginUser = createAsyncThunk('loginuser', async (user: ICredentials) => {
   const { email, password } = user
   const result = await signInWithEmailAndPassword(auth, email, password)
   return result.user.email
})
export const createUser = createAsyncThunk('fetchuser', async (user: ICredentials) => {
   const { email, password } = user
   const result = await createUserWithEmailAndPassword(auth, email, password)
   return result.user.email
});
const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      getUser: (state, action) => {
         state.user.email = action.payload
      }
   },
   extraReducers: (builder) => {
      builder.addCase(createUser.pending, (state) => {
         state.isError = false
         state.isLoading = true
         state.error = null
         state.user.email = null
      })
         .addCase(createUser.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false
            state.error = null
            state.user.email = action.payload
         })
         .addCase(createUser.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.error = action.error.message!
            state.user.email = null
         }).addCase(loginUser.pending, (state) => {
            state.isError = false
            state.isLoading = true
            state.error = null
            state.user.email = null
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false
            state.error = null
            state.user.email = action.payload
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.error = action.error.message!
            state.user.email = null
         })
   }
})
// 
export const { getUser } = userSlice.actions
export default userSlice.reducer
/* 
{
   name: "user",
   initialState,
   reducers: {
  },
}

*/