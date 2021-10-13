import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "..";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            username: ''
        },
        userList: [
            {
                username: "Student1",
                pwd: "123456",
                isAdmin: false,
            },
            {
                username: "admin",
                pwd: "123456",
                isAdmin: true
            }
        ]
    },
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.currentUser.username = action.payload;
        }
    }
})



export const { updateName } = userSlice.actions;
export default userSlice.reducer