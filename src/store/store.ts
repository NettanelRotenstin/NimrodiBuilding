import { configureStore } from "@reduxjs/toolkit"
import { roleSlice } from "./Rolereducer"
import { floorSlice } from "./floorreducer"

// FILL HERE 3.3
export const store = configureStore({
    reducer: {
        role: roleSlice.reducer,
        floor: floorSlice.reducer
    },
})

export const { setRole } =
    { ...roleSlice.actions, ...floorSlice.actions }

export type RootState = ReturnType<typeof store.getState>