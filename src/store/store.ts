import { configureStore } from "@reduxjs/toolkit"
import { roleSlice } from "./rolereducer"
import { floorSlice } from "./floorreducer"

// FILL HERE 3.3
export const store = configureStore({
    reducer: {
        role: roleSlice.reducer,
        floor: floorSlice.reducer
    },
})

export const { setRole, changeAccess } =
    { ...roleSlice.actions, ...floorSlice.actions }

export type RState = ReturnType<typeof store.getState>