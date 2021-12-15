import { configureStore } from "@reduxjs/toolkit";

import productFilter from "./product-filter/slice";
import productCategory from "./product-category/slice";
import product from "./product/slice";

const store = configureStore({
    reducer: {
        productFilter: productFilter,
        productCategory: productCategory,
        product: product,
    },
});

export default store;
