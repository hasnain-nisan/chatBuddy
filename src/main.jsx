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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

const store = configureStore(
  {
    reducer: {
      authData: authReducer,
    }
  },
  devToolsEnhancer()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);
