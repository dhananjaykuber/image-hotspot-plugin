/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useSetting } from "@wordpress/block-editor";
import { BaseControl, Button, Flex, FlexItem } from "@wordpress/components";

export default function ColorPalette({ label, setAttributes }) {
	const colorPalette = useSetting("color.palette");

	return (
		<BaseControl label={label || __("Select Color", "image-hotspot")}>
			<Flex
				gap={2}
				wrap
				justify="flex-start"
				className="wp-image-color-palette"
			>
				{colorPalette.map((color, index) => (
					<FlexItem key={index} className="wp-image-color-item">
						<Button
							className="wp-image-color"
							style={{ backgroundColor: color.color }}
						/>
					</FlexItem>
				))}
			</Flex>
		</BaseControl>
	);
}
