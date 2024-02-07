import { createAsyncThunk } from "@reduxjs/toolkit"


interface FormBody {
    password: string,
    passwordConfirm: string,
    token: string | null
}

const API_ENDPOINT_HOST = import.meta.env.VITE_REACT_APP_API_ENDPOINT_HOST;
console.log(API_ENDPOINT_HOST);

export const fetchResetPassword = createAsyncThunk(
    'reset-password/fetchResetPassword', async (body: FormBody, {rejectWithValue} ) => {
        const url = `${API_ENDPOINT_HOST}/auth/reset-password`;
        try
        {
            const response = await fetch(url, {
                method:'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            const result = await response.json();
            console.log(result);
            return result;
        }
        catch (err)
        {
            rejectWithValue(err);
        }
    }
)

