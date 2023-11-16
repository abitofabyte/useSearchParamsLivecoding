import { useLoaderData, useSearchParams } from "react-router-dom"
import { productList } from "../data/fakeData.js"
import { ColorPicker } from "../components/ColorPicker.jsx"
import { SizePicker } from "../components/SizePicker.jsx"

export function fetchProduct({ params }) {
	return (
		productList.find((product) => product.name === params.name) ?? {
			error: { message: "Could not find a product called " + params.name },
		}
	)
}

export function ProductPage() {
	const product = useLoaderData()

	if (product.error) throw product.error

	const [searchParams, setSearchParams] = useSearchParams()

	const selectedColor = searchParams.get("color")
	const selectedSize = searchParams.get("size")

	const handleColorSelect = (color) => {
		setSearchParams((prev) => {
			if (color !== selectedColor) {
				prev.set("color", color)
			} else {
				prev.delete("color")
			}
			return prev
		})
	}
	const handleSizeSelect = (size) => {
		setSearchParams((prev) => {
			if (size !== selectedSize) {
				prev.set("size", size)
			} else {
				prev.delete("size")
			}

			return prev
		})
	}

	return (
		<div>
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
