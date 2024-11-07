//FILL HERE 3.1

import { createSlice } from "@reduxjs/toolkit";

export const floorSlice = createSlice({
    name: "floor",
    initialState: ,
    reducers: {
        addNewPolicy: (state: number, action: PayloadAction<GenericPayLoad>) => {
            state += action.payload.amount!;
        },
    },
});