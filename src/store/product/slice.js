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
    var url = new URL("https://api.staging.eyes-aid.com/api/product-filter");

    for (const name in filters) {
        url.searchParams.append(name, filters[name]);
    }

    if (filters.taxonomies.length) {
        url.pathname += "/" + filters.taxonomies.join("/");
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch(setProducts(data.data)));
};

export default productSlice.reducer;
