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

/**
 * Styles
 */
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { image, imageDescription, hotspots } = attributes;

	const blockProps = useBlockProps();

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Image", "image-hotspot")} initialOpen={true}>
					<MediaUploadComponent
						onSelect={() => {}}
						onRemove={() => {}}
						value={image}
					/>
					<TextControl
						label={__("Image Description", "image-hotspot")}
						value={imageDescription}
						onChange={(value) => setAttributes({ imageDescription: value })}
						help={__("Description for screen readers.", "image-hotspot")}
					/>
				</PanelBody>

				<PanelBody title={__("Hotspots", "image-hotspot")} initialOpen={true}>
					<HotspotList hotspots={hotspots} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{__("Image Hotspot - hello from the editor!", "image-hotspot")}
			</div>
		</Fragment>
	);
}
