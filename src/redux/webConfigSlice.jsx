import { createSlice } from "@reduxjs/toolkit";

export const webConfigSlice = createSlice({
    name: "webConfig",
    initialState:{
        screenWidth: window.innerWidth,
        desktopWidth: 920,
    },
    reducers:{
        updateScreenWidth: (state, action) => {
            state.screenWidth = action.payload
        },
    },
})

export const {updateScreenWidth} = webConfigSlice.actions

export default webConfigSlice.reducer