import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tokens } from '../../../interfaces/auht.interface'

const initialState: Tokens = {
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveTokens: (state, action: PayloadAction<Tokens>) => {
      return {...state, ...action.payload}
    }
  }
})

export const { saveTokens } = authSlice.actions
export default authSlice.reducer