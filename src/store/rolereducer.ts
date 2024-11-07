//FILL HERE 3.2

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enumRole } from "../types/IRole";
import PayLoadGeneric from "../types/PayLoadGeneric";

export const roleSlice = createSlice({
    name: "role",
    initialState: enumRole.UnknownPersonnel,
    reducers: {
        setRole:(state:enumRole,action:PayloadAction<PayLoadGeneric>) =>{
            state = action.payload.role!
        }
}});