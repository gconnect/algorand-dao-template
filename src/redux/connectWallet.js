import { createSlice} from '@reduxjs/toolkit'

export const connectBtnSlice = createSlice({
  name: 'connectBtn',
  initialState: {
    isConnect: false
  },
  reducers: {
    connectBtnReducer: state => {
      state.isConnect = !state.isConnect
    }
  }
})

export const { connectBtnReducer } = connectBtnSlice.actions
export default connectBtnSlice.reducer