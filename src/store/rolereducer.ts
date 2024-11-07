//FILL HERE 3.2

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const treasureSlice = createSlice({
    name: "role",
    initialState: ,
    reducers: {
        addNewPolicy: (state: number, action: PayloadAction<>) => {
            state += action.payload.amount!;
        },
        setRole:(state:Roles,action:PayLoadAction<PayLoad>) =>{
            state = action.payload.role
        }
});