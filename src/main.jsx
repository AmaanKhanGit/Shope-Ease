import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Products from "./routes/Products.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import ContactUs from "./routes/ContactUs.jsx";
import { Provider } from "react-redux";
import shopeEaseStore from "./components/store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={shopeEaseStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
