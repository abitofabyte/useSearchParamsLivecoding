import {useSearchParams} from "react-router-dom";

export function ColorPicker({ colors, selectedColor, onSelect }) {
	return (
		<div className="btn-container">
			{colors.map((color) => (
				<ColorPickerButton
					key={color}
					color={color}
					isSelected={selectedColor === color}
					onSelect={onSelect}
				/>
			))}
		</div>
	)
}

function ColorPickerButton({ color, isSelected, onSelect }) {
	return (
		<button
			style={{ backgroundColor: color }}
			className={isSelected ? "btn-selected" : undefined}
			onClick={() => onSelect(color)}
		/>
	)
}
