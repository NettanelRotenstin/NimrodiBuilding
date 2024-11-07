//FILL HERE 3.1

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const floorSlice = createSlice({
    name: "floor",
    initialState: [false,false,false,false,false],
    reducers: {
        changeAccess: (state: boolean[], action: PayloadAction<number>) => {
            state[action.payload] =  !state[action.payload];
        },
    },
});