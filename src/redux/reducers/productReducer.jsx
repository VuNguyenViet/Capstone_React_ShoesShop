import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/config";
const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
    getProductByKwdAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    changeProductQntAction: (state, action) => {
      // action = { prodId, increOrDecre }
      console.log(state.arrProduct);
      let index = state.arrProduct.findIndex(
        (prod) => prod.id === action.payload.prodId
      );
      console.log(index);
      //   if (action.payload.increOrDecre) {
      //     state.arrProduct[index].quantity += 1;
      //   } else {
      //     state.arrProduct[index].quantity -= 1;
      //   }
    },
  },
});

export const {
  setArrProductAction,
  setProductDetailAction,
  getProductByKwdAction,
  changeProductQntAction,
} = productReducer.actions;

export default productReducer.reducer;

// ------------ action thunk (api) ----------------

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      //call api
      const result = await http.get("/product");
      //Lấy dữ liệu về đưa lên redux
      const action = setArrProductAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetailApiAction = (productId) => {
  return async (dispatch) => {
    // call api
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`,
        method: "GET",
      });

      const action = setProductDetailAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductByKwdApiAction = (keyword) => {
  return async (dispatch) => {
    // call api
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
        method: "GET",
      });

      const action = getProductByKwdAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
