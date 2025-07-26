/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import ColorPalette from "./color-palette";

export default function HotspotList({ hotspots, setAttributes }) {
	return (
		<Flex direction={"column"} gap={2}>
			{hotspots.map((hotspot, index) => (
				<FlexItem key={index}>
					<FlexBlock>
						<TextControl label={__("Title", "image-hotspot")} />
						<ToggleControl label={__("Show Title", "image-hotspot")} />
						<TextControl label={__("Description", "image-hotspot")} />
						<TextControl label={__("Link", "image-hotspot")} />
						<ToggleControl label={__("Animation", "image-hotspot")} />
						<ToggleControl label={__("Custom Color", "image-hotspot")} />
						<ColorPalette label={__("Background Color", "image-hotspot")} />
						<ColorPalette label={__("Title Color", "image-hotspot")} />
						<ColorPalette label={__("Tooltip Color", "image-hotspot")} />
						<ColorPalette label={__("Tooltip Text Color", "image-hotspot")} />
						<TextControl
							label={__("Video URL", "image-hotspot")}
							help={__("Embed video from YouTube", "image-hotspot")}
						/>
					</FlexBlock>
				</FlexItem>
			))}

			<FlexItem>
				<Button
					variant="primary"
					onClick={() => {
						const newHotspot = { title: "", description: "" };
						setAttributes({ hotspots: [...hotspots, newHotspot] });
					}}
				>
					{__("Add Hotspot", "image-hotspot")}
				</Button>
			</FlexItem>
		</Flex>
	);
}
