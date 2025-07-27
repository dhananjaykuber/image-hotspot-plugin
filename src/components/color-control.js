/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

/**
 * Internal dependencies
 */
import ColorPalette from "./color-palette";

export default function ColorControl({ hotspots, setAttributes, index }) {
	const handleColorChange = (field, value) => {
		const updatedHotspots = [...hotspots];
		updatedHotspots[index] = {
			...updatedHotspots[index],
			[field]: value,
		};
		setAttributes({ hotspots: updatedHotspots });
	};

	return (
		<Fragment>
			{hotspots[index].customColors && (
				<Fragment>
					<ColorPalette
						label={__("Background Color", "image-hotspot")}
						field="backgroundColor"
						onClick={handleColorChange}
						selectedColor={hotspots[index].backgroundColor}
					/>
					<ColorPalette
						label={__("Title Color", "image-hotspot")}
						field="titleColor"
						onClick={handleColorChange}
						selectedColor={hotspots[index].titleColor}
					/>
					<ColorPalette
						label={__("Tooltip Color", "image-hotspot")}
						field="tooltipColor"
						onClick={handleColorChange}
						selectedColor={hotspots[index].tooltipColor}
					/>
					<ColorPalette
						label={__("Tooltip Text Color", "image-hotspot")}
						field="tooltipTextColor"
						onClick={handleColorChange}
						selectedColor={hotspots[index].tooltipTextColor}
					/>
				</Fragment>
			)}
		</Fragment>
	);
}
