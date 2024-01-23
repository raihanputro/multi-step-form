import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: { value: 0 },
    reducers: {
        next: ( state, action ) => {
            state.value += 1;
        },
        back: ( state, action ) => {
            state.value -= 1;
        },
    },
});

export const { next } = pageSlice.actions;
export const { back } = pageSlice.actions;
export default pageSlice.reducer;