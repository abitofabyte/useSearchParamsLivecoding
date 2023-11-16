export function SizePicker({ sizes, selectedSize, onSelect }) {
	return (
		<div className="btn-container">
			{sizes.map((size) => (
				<SizePickerButton
					key={size}
					size={size}
					selected={size === selectedSize}
					onSelect={onSelect}
				/>
			))}
		</div>
	)
}

function SizePickerButton({ size, selected, onSelect }) {
	return (
		<button
			className={selected ? "btn-selected" : undefined}
			onClick={() => onSelect(size)}>
			{size}
		</button>
	)
}
