import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    user: null,
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.basket = [...state.basket, action.payload];

        },
        removeFromBasket: (state, action) => {
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.payload.id}) as its not in basket!`
                );
            }

            state.basket = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export const selectUser = (state) => state.basket.user;

export const selectTotal = (state) =>
    state.basket.basket.reduce((total, item) => total + item.price, 0);

export const selectItems = (state) => state.basket.basket.length;

export default basketSlice.reducer;