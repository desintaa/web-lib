import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import bookReducer from '../data-dummy/Books'
import {combineReducers} from 'redux'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig ={
    key:'react',
    storage
}

const reducers = combineReducers({
    books: bookReducer
})

const persistReducers = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistReducers,
})