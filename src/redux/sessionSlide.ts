
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ISessionState} from "./ISessionState.ts";

 const initialState: ISessionState = {
     sessionId: null,
 }

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSessionId: (state, action: PayloadAction<string>) =>{
    state.sessionId = action.payload;
    },}
},)

export const { setSessionId } = sessionSlice.actions;
export default sessionSlice.reducer;

