import { configureStore } from '@reduxjs/toolkit'
import { changeName, changeCost, formReducer } from './slices/formSlice'
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from './slices/carsSlice'

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
})

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar }
