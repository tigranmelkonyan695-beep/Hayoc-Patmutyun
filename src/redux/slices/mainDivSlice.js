import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getArr1 = createAsyncThunk(
    "mainDiv/getArr1",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("http://localhost:3000/mainDiv"); // գրի քո API-ն
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const mainDivSlice = createSlice({
    name: "mainDiv",
    initialState: {
        mainDivs: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArr1.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getArr1.fulfilled, (state, action) => {
                state.loading = false;
                state.mainDivs = action.payload;
            })
            .addCase(getArr1.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default mainDivSlice.reducer;

