
import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlide.ts"


export const store = configureStore({
    reducer: {
        session: sessionReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
