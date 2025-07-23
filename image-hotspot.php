<?php
/**
 * Plugin Name:       Image Hotspot
 * Description:       Interactive Gutenberg block for creating image hotspots with rich content and a seamless, visual editing experience.
 * Plugin URI:        https://github.com/dhananjaykuber/image-hotspot-plugin
 * Version:           1.0.0
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Author:            Dhananjay Kuber
 * Author URI:        https://dhananjaykuber.in
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       image-hotspot
 *
 * @package           image-hotspot
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Initializes the Image Hotspot block by registering its metadata and type.
 *
 * @since 1.0.0
 */
function wp_image_hotspot_block_init() {

	// Register the block types from the metadata collection.
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	// Fallback for older versions of WordPress that do not support block metadata collections.
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';

	// Register each block type defined in the manifest.
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}

add_action( 'init', 'wp_image_hotspot_block_init' );
