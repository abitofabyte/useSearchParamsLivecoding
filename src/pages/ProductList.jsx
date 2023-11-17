import { productList } from "../data/fakeData.js"
import { Link, useLoaderData } from "react-router-dom"

export function fetchProducts() {
	return productList
}

export function ProductList() {
	const products = useLoaderData()

	return (
		<div className="product-list">
			{products.map((product) => (
				<Link
					key={product.name}
					to={product.name}>
					<button className="product-list-button">{product.name}</button>
				</Link>
			))}
		</div>
	)
}
