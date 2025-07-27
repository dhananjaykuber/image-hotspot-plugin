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

/**
 * Internal dependencies
 */
import ColorControl from "./color-control";

export default function HotspotList({ hotspots, setAttributes }) {
	// Handle value change for each hotspot
	const handleValueChange = (index, field, value) => {
		const updatedHotspots = [...hotspots];
		updatedHotspots[index] = {
			...updatedHotspots[index],
			[field]: value,
		};
		setAttributes({ hotspots: updatedHotspots });
	};

	// Handle removing a hotspot
	const handleRemoveHotspot = (index) => {
		const updatedHotspots = [...hotspots];
		updatedHotspots.splice(index, 1);
		setAttributes({ hotspots: updatedHotspots });
	};

	return (
		<Flex direction={"column"} gap={2}>
			{hotspots.map((hotspot, index) => (
				<FlexItem key={index}>
					<FlexBlock className="wp-image-hotspot-inspector">
						<TextControl
							label={__("Title", "image-hotspot")}
							value={hotspot.title}
							onChange={(value) => handleValueChange(index, "title", value)}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
						<ToggleControl
							label={__("Show Title", "image-hotspot")}
							checked={hotspot.showTitle}
							onChange={(value) => handleValueChange(index, "showTitle", value)}
							__nextHasNoMarginBottom
						/>
						<TextControl
							label={__("Description", "image-hotspot")}
							value={hotspot.description}
							onChange={(value) =>
								handleValueChange(index, "description", value)
							}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
						<TextControl
							label={__("Link", "image-hotspot")}
							value={hotspot.link}
							onChange={(value) => handleValueChange(index, "link", value)}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
						<ToggleControl
							label={__("Animation", "image-hotspot")}
							checked={hotspot.enableAnimation}
							onChange={(value) =>
								handleValueChange(index, "enableAnimation", value)
							}
							__nextHasNoMarginBottom
						/>
						<ToggleControl
							label={__("Custom Color", "image-hotspot")}
							checked={hotspot.customColors}
							onChange={(value) =>
								handleValueChange(index, "customColors", value)
							}
							__nextHasNoMarginBottom
						/>

						<ColorControl
							hotspots={hotspots}
							setAttributes={setAttributes}
							index={index}
						/>

						<TextControl
							label={__("Video URL", "image-hotspot")}
							value={hotspot.videoURL}
							onChange={(value) => handleValueChange(index, "videoURL", value)}
							help={__("Embed video from YouTube", "image-hotspot")}
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>

						<Button
							variant="primary"
							isDestructive
							onClick={() => handleRemoveHotspot(index)}
						>
							{__("Remove Hotspot", "image-hotspot")}
						</Button>
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
