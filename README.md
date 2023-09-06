|Redux Toolkit|

1. 🌟 configureStore()

-   configureStore wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your **slice reducers**, add whatever Redux **middleware** you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

-   **slice** is a splitting up the state objects into multiple slices of state. So, a **slice** is a collection of reducer logic and action for single feature of the app.

2. 🌟 createSlice()

-   accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.


3. 🌟 useSelector from react-redux
- useSelector takes in a function as an argument that returns the part of the state that you want. we normally use this useSelector when we map around a useful data such as posts, users and so on. In this app, I used useSelector to map around the posts in the PostsList component.

```
const posts = useSelector(selectAllPosts);

** selectAllPosts was defined from Slice as below
const selectAllPosts =(state)=> state.posts
```

4. 🌟Redux Toolkit, we can mutate the state. Why?
- Redux Toolkit uses Immer js under the hood and that allows us to write our JavaScript like .push which normally mutate the original array, in our app which is state but it actually doesn't mutate our state as immer js creates new state underneath. (Only works inside of the createSlice!!)
