import { createSlice } from "@reduxjs/toolkit";

const productSlices = createSlice({
  name: "Products",
  initialState: {
    loading: false,
  },
  reducers: {
    productRequest(state, action) {
      return {
        loading: true,
      };
    },
    productSuccess(state, action) {
      return {
        loading: false,
        products: action.payload.products,
      };
    },
    productFail(state, action) {
      return {
        loading: false,
        error: action.payload.error,
      };
    },
  },
});
const {actions,reducer} = productSlices;

export const {productRequest, productSuccess, productFail} = actions;
export default reducer
