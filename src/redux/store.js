import { configureStore } from '@reduxjs/toolkit'
import toggleDrawerReducer from './toggleDrawer'
import connectWalletReducer from './connectWallet'

const store = configureStore({
  reducer: {
    toggle: toggleDrawerReducer,
    connectWallet: connectWalletReducer,
  },

})

export default store