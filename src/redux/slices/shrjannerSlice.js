
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getArr = createAsyncThunk(
    "shrjanner/get",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("http://localhost:3000/shrjanner");
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const shrjannerSlice = createSlice({
    name: "shrjanner",
    initialState: {
        shrjanners: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArr.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getArr.fulfilled, (state, action) => {
                state.loading = false;
                state.shrjanners = action.payload;
            })
            .addCase(getArr.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default shrjannerSlice.reducer;
