/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { select } from "@wordpress/data";
import { BaseControl, Button, Flex, FlexItem } from "@wordpress/components";

export default function ColorPalette({ label, field, onClick, selectedColor }) {
	const colorPalette = select("core/block-editor").getSettings().colors;

	return (
		<BaseControl
			label={label || __("Select Color", "image-hotspot")}
			__nextHasNoMarginBottom
		>
			<Flex
				gap={1}
				wrap
				justify="flex-start"
				className="wp-image-color-palette"
			>
				{colorPalette.map((color, index) => (
					<FlexItem
						key={index}
						className={`wp-image-color-item ${
							selectedColor === color.color ? "is-selected" : ""
						}`}
					>
						<Button
							className="wp-image-color"
							style={{ backgroundColor: color.color }}
							onClick={() => onClick(field, color.color)}
						/>
					</FlexItem>
				))}
			</Flex>
		</BaseControl>
	);
}
