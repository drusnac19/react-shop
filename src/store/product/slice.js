import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;

export const getProducts = (filters) => (dispatch, getState) => {
    const urlFilter = filters.filters.length
        ? "/" + filters.filters.join("/")
        : "";

    fetch(`https://api.staging.eyes-aid.com/api/product-filter` + urlFilter)
        .then((response) => response.json())
        .then((data) => dispatch(setProducts(data.data)));
};

export default productSlice.reducer;
