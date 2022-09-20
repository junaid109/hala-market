import { configureStore } from '@redux/toolkit';
import basketReducer from './slices/basketReducer';


export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});

