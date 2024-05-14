import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "data",
    initialState: {
        id: "",
        title: "",
       
    },
    reducers: {
        saveId: (state, action) => {
            return {...state, id: action.payload.id, title: action.payload.title};
        },
        deleteId: (state) => {
            return {...state, id: "", title: ""};
        }
    }
});

export const { saveId, deleteId } = eventSlice.actions;

export default eventSlice.reducer;