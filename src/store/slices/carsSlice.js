import { createSlice, nanoid } from '@reduxjs/toolkit'

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    carsList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      state.carsList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      })
    },
    removeCar(state, action) {
      const upadatedCarsList = state.carsList.filter((car) => {
        return car.id !== action.payload
      })
      state.carsList = upadatedCarsList
    },
  },
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer
