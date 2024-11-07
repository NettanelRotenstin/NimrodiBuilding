//FILL HERE 3.1

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PayLoadGeneric from "../types/PayLoadGeneric";

export const floorSlice = createSlice({
    name: "floor",
    initialState: [false, false, false, false, false],
    reducers: {
        changeAccess: (state: boolean[], action: PayloadAction<PayLoadGeneric>) => {
            state[action.payload.num!] = !state[action.payload.num!];
        },
    },
}); 