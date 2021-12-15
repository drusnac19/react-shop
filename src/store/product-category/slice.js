import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    current: {},
    loading: false,
};

export const getCategories = createAsyncThunk(
    "productCategory/getCategories",
    async () => {
        const response = await fetch(
            `https://api.staging.eyes-aid.com/api/product-category`
        ).then((response) => response.json());

        return response;
    }
);

export const getCategoryBySlug = createAsyncThunk(
    "productCategory/getCategoryBySlug",
    async (slug) => {
        const response = await fetch(
            `https://api.staging.eyes-aid.com/api/product-category`
        ).then((response) => response.json());

        const found = response.data.find(
            (element, index) => element.slug === slug
        );

        return found;
    }
);

const productCategoriesSlice = createSlice({
    name: "productCategory",
    initialState,
    reducers: {},
    extraReducers: {
        [getCategories.pending]: (state) => {},
        [getCategories.fulfilled]: (state, { payload }) => {
            state.categories = payload.data;
        },

        [getCategoryBySlug.pending]: (state) => {},
        [getCategoryBySlug.fulfilled]: (state, { payload }) => {
            state.current = payload;
        },
    },
});

export const selectCurrentCategory = (state) => state.productCategory.current;

export const productCategoriesActions = productCategoriesSlice.actions;

export default productCategoriesSlice.reducer;
