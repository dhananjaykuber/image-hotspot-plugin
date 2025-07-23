/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import metadata from "./block.json";

// Styles
import "./style.scss";

registerBlockType(metadata.name, {
	edit: Edit,
});
