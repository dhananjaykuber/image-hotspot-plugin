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

export default function Hotspot({ hotspot }) {
	const animate = hotspot.enableAnimation || true;
	const embedURL = getYoutubeEmbedURL(hotspot.videoURL);

	return (
		<div className="imagehotspot">
			<div className="imagehotspot__container">
				<button
					className={`imagehotspot__hotspot ${animate && "is-animated"}`}
					style={{
						"--image-hotspot-color": hotspot.backgroundColor || HOTSPOT_COLOR,
					}}
				>
					{hotspot.showTitle && hotspot.title && (
						<span
							className="imagehotspot__title"
							style={{
								"--image-hotspot-title-color":
									hotspot.titleColor || HOTSPOT_TITLE_COLOR,
							}}
						>
							{hotspot.title}
						</span>
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
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
								className="imagehotspot__video"
							></iframe>
						)}
						<div className="imagehotspot__description">
							{hotspot.description}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
