import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Neil Lebowski' },
    { id: '1', name: 'Rosa Kang' },
    { id: '2', name: 'Steve Lee' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
