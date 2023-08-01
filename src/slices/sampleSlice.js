import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    reduxVal: ''
}

export const sampleSlice = createSlice({
    name: "sampleSlice",
    initialState,
    reducers: {
        updateReduxVal: (state, action) => {
            state.reduxVal = action.payload
        }
    }
})

export const { updateReduxVal } = sampleSlice.actions

export default sampleSlice.reducer