|Redux Toolkit|

1. 🌟 configureStore()

-   configureStore wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your **slice reducers**, add whatever Redux **middleware** you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

-   **slice** is a splitting up the state objects into multiple slices of state. So, a **slice** is a collection of reducer logic and action for single feature of the app.

2. 🌟 createSlice()

-   accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
