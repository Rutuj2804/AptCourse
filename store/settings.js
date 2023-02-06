import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: true,
};

// Actual Slice
export const settingsSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to set the authentication status
        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        },
    },
});

export const { toggleSidebar } =
    settingsSlice.actions;

export default settingsSlice.reducer;
