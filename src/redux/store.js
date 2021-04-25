import { configureStore } from '@reduxjs/toolkit'
import EntirePoolSlice from './slices/EntirePoolSlice'

export default configureStore({
  reducer: {EntirePool: EntirePoolSlice},
})
