import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    taxonomies: [],
    filters: [],
};

export const getTaxonomies = createAsyncThunk(
    "productFilter/getTaxonomies",
    async (categoryId) => {
        const response = await fetch(
            `https://api.staging.eyes-aid.com/api/taxonomy?category_id=${categoryId}`
        ).then((response) => response.json());

        return response;
    }
);

const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        setFilterHandler: (state, action) => {
            const value = action.payload;
            const filters = state.filters;

            if (filters.includes(value)) {
                const findIndex = filters.findIndex((el) => el === value);
                filters.splice(findIndex, 1);
            } else {
                filters.push(value);
            }
        },
    },
    extraReducers: {
        [getTaxonomies.pending]: (state) => {},
        [getTaxonomies.fulfilled]: (state, { payload }) => {
            state.taxonomies = payload.data;
        },
    },
});

export const { setFilterHandler } = productFilterSlice.actions;

export default productFilterSlice.reducer;
