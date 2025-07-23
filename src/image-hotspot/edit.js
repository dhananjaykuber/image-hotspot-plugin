/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

// Styles
import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<p {...blockProps}>
			{__("Image Hotspot - hello from the editor!", "image-hotspot")}
		</p>
	);
}
