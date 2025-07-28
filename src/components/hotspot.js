/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import {
	HOTSPOT_COLOR,
	HOTSPOT_TITLE_COLOR,
	HOTSPOT_TOOLTIP_COLOR,
	HOTSPOT_TOOLTIP_TEXT_COLOR,
} from "../utils/constants";
import { getYoutubeEmbedURL } from "../utils/helper";

/**
 * External dependencies
 */
import { Rnd } from "react-rnd";
import { useEffect, useState } from "@wordpress/element";

export default function Hotspot({
	index,
	hotspot,
	updateHotspotPosition,
	imageDimensions,
}) {
	const animate = hotspot.enableAnimation || true;
	const embedURL = getYoutubeEmbedURL(hotspot.videoURL);

	// Convert percentage position to pixels for Rnd
	const getPixelPosition = () => {
		if (
			!hotspot.position ||
			!imageDimensions.width ||
			!imageDimensions.height
		) {
			return { x: 10, y: 10 };
		}

		return {
			x: (hotspot.position.x / 100) * imageDimensions.width,
			y: (hotspot.position.y / 100) * imageDimensions.height,
		};
	};

	const [currentPosition, setCurrentPosition] = useState(getPixelPosition());

	// Update position when image dimensions or hotspot position changes
	useEffect(() => {
		setCurrentPosition(getPixelPosition());
	}, [hotspot.position, imageDimensions]);

	return (
		<Rnd
			position={currentPosition}
			size={{ width: 38, height: 38 }}
			enableResizing={false}
			onDragStop={(event, data) => {
				updateHotspotPosition(index, { x: data.x, y: data.y });
			}}
			onDrag={(event, data) => {
				setCurrentPosition({ x: data.x, y: data.y });
			}}
		>
			<div className="imagehotspot__container">
				<button
					className={`imagehotspot__hotspot ${animate && "is-animated"}`}
					style={{
						"--image-hotspot-color": hotspot.backgroundColor || HOTSPOT_COLOR,
						"--image-hotspot-title-color":
							hotspot.titleColor || HOTSPOT_TITLE_COLOR,
						"--image-hotspot-icon": hotspot.icon,
					}}
				>
					{hotspot.icon && (
						<span
							className="imagehotspot__hotspot-icon"
							role="presentation"
						></span>
					)}
					{hotspot.showTitle && hotspot.title && (
						<span className="imagehotspot__hotspot-title">{hotspot.title}</span>
					)}
				</button>

				{hotspot.description && (
					<div
						className="imagehotspot__tooltip"
						style={{
							"--image-hotspot-tooltip-color":
								hotspot.tooltipColor || HOTSPOT_TOOLTIP_COLOR,
							"--image-hotspot-tooltip-text-color":
								hotspot.tooltipTextColor || HOTSPOT_TOOLTIP_TEXT_COLOR,
						}}
					>
						{hotspot.videoURL && embedURL && (
							<iframe
								width="560"
								height="315"
								src={embedURL}
								title={__("YouTube video player", "image-hotspot")}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="imagehotspot__tooltip-video"
							></iframe>
						)}
						<div className="imagehotspot__tooltip-description">
							{hotspot.description}
						</div>
					</div>
				)}
			</div>
		</Rnd>
	);
}
