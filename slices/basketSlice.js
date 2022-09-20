import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    user: null,
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {},
        removeFromBasket: (state, action) => {},
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;