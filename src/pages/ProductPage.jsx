import { useLoaderData } from "react-router-dom"
import { productList } from "../data/fakeData.js"
import { ColorPicker } from "../components/ColorPicker.jsx"
import { SizePicker } from "../components/SizePicker.jsx"
import { useState } from "react"

export function fetchProduct({ params }) {
	return productList.find((product) => product.name === params.name)
}

export function ProductPage() {
	const product = useLoaderData()

	const [selectedColor, setSelectedColor] = useState()
	const [selectedSize, setSelectedSize] = useState()

	const handleColorSelect = (color) => {
		setSelectedColor((prev) => (color != selectedColor ? color : undefined))
	}
	const handleSizeSelect = (size) => {
		setSelectedSize((prev) => (size != selectedSize ? size : undefined))
	}

	return (
		<div className="product-page">
			<h3>{product.name}</h3>
			<ColorPicker
				colors={product.availableColors}
				selectedColor={selectedColor}
				onSelect={handleColorSelect}
			/>
			<SizePicker
				sizes={product.availableSizes}
				selectedSize={selectedSize}
				onSelect={handleSizeSelect}
			/>
		</div>
	)
}
