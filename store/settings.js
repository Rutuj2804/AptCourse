import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
    isLoading: false,
    success: "",
};

export const settingsSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        },
        setSuccess(state, action) {
            state.success = action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
    },
});

export const { toggleSidebar, setSuccess, setLoading } =
    settingsSlice.actions;

export default settingsSlice.reducer;
