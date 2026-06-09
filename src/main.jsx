import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Products from "./routes/Products.jsx";
import { Provider } from "react-redux";
import shopeEaseStore, { persistor } from "./components/store/index.js";
import Cart from "./routes/Cart.jsx";
import { PersistGate } from "redux-persist/integration/react";
import Login_SignUp from "./routes/Login_SignUp.jsx";
import Wishlist from "./routes/Wishlist.jsx";
import Profile from "./routes/Profile.jsx";
import ProductDetailsPage from "./routes/ProductDetailsPage.jsx";
import NotFound from "./components/common/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/product-details/:slug", element: <ProductDetailsPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login-signup", element: <Login_SignUp /> },
      { path: "/profile", element: <Profile /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={shopeEaseStore}>
      {/*//~ setup for redux-persist*/}
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
