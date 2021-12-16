import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    taxonomies: [],
    filters: [],
    order: {
        by: "id",
        type: "asc",
    },
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
        setOrderBy: (state, action) => {
            const [by, type] = action.payload.split(",");

            state.order.by = by ? by : state.order.by;
            state.order.type = type ? type : state.order.type;

            console.log(by, type);
        },
    },
    extraReducers: {
        [getTaxonomies.pending]: (state) => {},
        [getTaxonomies.fulfilled]: (state, { payload }) => {
            state.taxonomies = payload.data;
        },
    },
});

export const { setFilterHandler, setOrderBy, setOrderType } =
    productFilterSlice.actions;

export default productFilterSlice.reducer;
