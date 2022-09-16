import { createSlice } from "@reduxjs/toolkit";

export const webConfigSlice = createSlice({
    name: "webConfig",
    initialState:{
        screenWidth: window.innerWidth,
        desktopWidth: 920,
        modalSoins: {status: false, key: ""},
    },
    reducers:{
        updateScreenWidth: (state, action) => {
            state.screenWidth = action.payload
        },
        updateModalSoins: (state, action) => {
            state.modalSoins = action.payload
        }
    },
})

export const {updateScreenWidth, updateModalSoins} = webConfigSlice.actions

export default webConfigSlice.reducer