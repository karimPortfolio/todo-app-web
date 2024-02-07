import { createSlice } from '@reduxjs/toolkit';
import { fetchResetPassword } from '../api/resetPasswordThunk';

interface InitialState {
    loading: boolean,
    result: Record<string, never>,
    error: string
}

const initialState: InitialState = {
    loading: false,
    result: {},
    error: ''
}

const resetPasswordSlice = createSlice({
    name:'forget-password',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchResetPassword.pending, (state) => {
            state.loading= true;
        });
        builder.addCase(fetchResetPassword.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.result = payload;
        });
        builder.addCase(fetchResetPassword.rejected, (state, {error}) => {
            state.loading = false;
            state.result = {},
            state.error = error.message || ''
        })
    }
})

export default resetPasswordSlice.reducer;
