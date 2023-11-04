import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import ProductReducer from './slices/productsslice'
const reducer = combineReducers ({
       productsState: ProductReducer
})

const store = configureStore({
    reducer,
    middleware:[thunk]
})

export default store;