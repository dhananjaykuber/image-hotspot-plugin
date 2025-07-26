/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { BaseControl, Button, Flex, FlexItem } from "@wordpress/components";

export default function MediaUploadComponent({ onSelect, onRemove, value }) {
	const hasMedia = value && (value.url || value.id);

	return (
		<BaseControl>
			{hasMedia ? (
				<div style={{ marginBottom: "1em" }}>
					<img
						src={value.url}
						alt={value.alt || __("Selected Media", "image-hotspot")}
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</div>
			) : (
				<p>{__("No image selected", "image-hotspot")}</p>
			)}

			<Flex justify="flex-start" gap={2}>
				<FlexItem>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelect}
							allowedTypes={["image"]}
							value={value?.id || ""}
							render={({ open }) => (
								<Button variant="primary" onClick={open}>
									{hasMedia
										? __("Replace", "image-hotspot")
										: __("Upload Image", "image-hotspot")}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</FlexItem>

				{hasMedia && onRemove && (
					<FlexItem>
						<Button variant="primary" onClick={onRemove} isDestructive>
							{__("Remove", "image-hotspot")}
						</Button>
					</FlexItem>
				)}
			</Flex>
		</BaseControl>
	);
}
