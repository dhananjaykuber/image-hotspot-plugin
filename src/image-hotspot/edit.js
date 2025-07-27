/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl, PanelBody } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

/**
 * Internal dependencies
 */
import MediaUploadComponent from "../components/media-upload";
import HotspotList from "../components/hotspot-list";
import Hotspot from "../components/hotspot";

/**
 * Styles
 */
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { image, imageDescription, hotspots } = attributes;

	const blockProps = useBlockProps();

	// Handle image selection
	const onSelectImage = (media) => {
		setAttributes({
			image: {
				id: media.id,
				url: media.url,
			},
		});
	};

	// Handle image removal
	const onRemoveImage = () => {
		setAttributes({
			image: {
				id: null,
				url: null,
			},
		});
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Image", "image-hotspot")} initialOpen={true}>
					<MediaUploadComponent
						onSelect={onSelectImage}
						onRemove={onRemoveImage}
						value={image}
					/>
					<TextControl
						label={__("Image Description", "image-hotspot")}
						value={imageDescription}
						onChange={(value) => setAttributes({ imageDescription: value })}
						help={__("Description for screen readers.", "image-hotspot")}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</PanelBody>

				<PanelBody title={__("Hotspots", "image-hotspot")} initialOpen={true}>
					<HotspotList hotspots={hotspots} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{hotspots?.map((hotspot, index) => (
					<Hotspot key={index} hotspot={hotspot} />
				))}
			</div>
		</Fragment>
	);
}
