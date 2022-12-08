import {createSlice} from'@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

import { bookData } from './book-data'

const bookSlice = createSlice({
    name: "books",
    initialState: {
        value: bookData
    },
    reducers: {
        addBook: (state, action) => {
            state.value.push(action.payload);
        },
        deleteBook: (state,action) => {
            state.value = state.value.filter((book) => book.id !== action.payload.id)
        },
        updateBook: (state, action) => {
            state.value.map((book) => {
                if (book.id === action.payload.id) {
                    if(action.payload.author !== '') {
                        book.author = action.payload.author
                    } else{}
                    if(action.payload.desc !== '') {
                        book.desc = action.payload.desc
                    } else{}
                    if(action.payload.imageUrl !== '') {
                        book.imageUrl = action.payload.imageUrl
                    } else{}
                } else {
                }
            })
        }
    }
})

export const {addBook, deleteBook, updateBook} = bookSlice.actions;
export default bookSlice.reducer
