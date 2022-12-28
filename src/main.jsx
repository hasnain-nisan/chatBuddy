import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer from './redux/reducers/authReducer';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import Auth from './components/Auth/Auth';
import NotFound from './components/NotFound/NotFound';
import './index.css'
import Home from './components/Home/Home';
import conversationReducer from './redux/reducers/conversationReducer';
import menuReducer from './redux/reducers/menuReducers';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Auth />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
// ]);

const store = configureStore(
  {
    reducer: {
      authData: authReducer,
      conversationData: conversationReducer,
      menuData: menuReducer,
    }
  },
  devToolsEnhancer()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);
