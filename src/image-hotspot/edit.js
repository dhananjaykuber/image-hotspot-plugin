/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl, PanelBody } from "@wordpress/components";
import { Fragment, useRef, useEffect, useState } from "@wordpress/element";

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

	const imageRef = useRef(null);
	const containerRef = useRef(null);

	// Track image dimensions for percentage calculations
	const [imageDimensions, setImageDimensions] = useState({
		width: 0,
		height: 0,
	});

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
			image: null,
		});
	};

	// Update image dimensions when image loads
	const handleImageLoad = () => {
		if (imageRef.current) {
			const { offsetWidth, offsetHeight } = imageRef.current;
			setImageDimensions({ width: offsetWidth, height: offsetHeight });
		}
	};

	// Recalculate dimensions on window resize
	useEffect(() => {
		const handleResize = () => {
			if (imageRef.current) {
				const { offsetWidth, offsetHeight } = imageRef.current;
				setImageDimensions({ width: offsetWidth, height: offsetHeight });
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Convert pixel position to percentage
	const updateHotspotPosition = (index, pixelPosition) => {
		if (!imageRef.current) {
			return;
		}

		const { offsetWidth, offsetHeight } = imageRef.current;

		if (offsetWidth === 0 || offsetHeight === 0) {
			return;
		}

		// Convert pixels to percentage
		const percentageX = (pixelPosition.x / offsetWidth) * 100;
		const percentageY = (pixelPosition.y / offsetHeight) * 100;

		const updatedHotspots = [...hotspots];
		updatedHotspots[index] = {
			...updatedHotspots[index],
			position: {
				x: Math.max(0, Math.min(100, percentageX)),
				y: Math.max(0, Math.min(100, percentageY)),
			},
		};

		setAttributes({ hotspots: updatedHotspots });
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
					<HotspotList
						image={image}
						hotspots={hotspots}
						setAttributes={setAttributes}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="imagehotspot__wrapper" ref={containerRef}>
					{image?.url ? (
						<img
							src={image.url}
							alt={imageDescription}
							className="imagehotspot__image"
							ref={imageRef}
							onLoad={handleImageLoad}
						/>
					) : (
						<div className="imagehotspot__placeholder">
							<span className="imagehotspot__placeholder-icon"></span>
							<MediaUploadComponent
								onSelect={onSelectImage}
								onRemove={onRemoveImage}
								value={image}
							/>
						</div>
					)}

					{image?.url &&
						imageDimensions.width > 0 &&
						hotspots?.map((hotspot, index) => (
							<Hotspot
								key={`hotspot-${index}`}
								index={index}
								hotspot={hotspot}
								updateHotspotPosition={updateHotspotPosition}
								imageDimensions={imageDimensions}
							/>
						))}
				</div>
			</div>
		</Fragment>
	);
}
