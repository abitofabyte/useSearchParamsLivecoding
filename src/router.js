import { createBrowserRouter } from "react-router-dom"
import { fetchProduct, ProductPage } from "./pages/ProductPage.jsx"
import { fetchProducts, ProductList } from "./pages/ProductList.jsx"

export const router = createBrowserRouter([
	{
		Component: ProductList,
		path: "/",
		loader: fetchProducts,
	},
	{
		Component: ProductPage,
		path: "/:name",
		loader: fetchProduct,
	},
])
