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

/**
 * Get YouTube embed URL from a standard YouTube video URL.
 *
 * @param string $url The YouTube video URL.
 * @return string|null The embed URL or null if invalid.
 */
function wp_image_hotspot_get_youtube_embed_url( $url ) {

	if ( empty( $url ) || ! filter_var( $url, FILTER_VALIDATE_URL ) ) {
		return null;
	}

	$parsed_url = wp_parse_url( $url );

	if (
		empty( $parsed_url['host'] ) ||
		! in_array( $parsed_url['host'], array( 'www.youtube.com', 'youtube.com' ), true )
	) {
		return null;
	}

	if ( empty( $parsed_url['query'] ) ) {
		return null;
	}

	parse_str( $parsed_url['query'], $query_params );

	if ( empty( $query_params['v'] ) ) {
		return null;
	}

	return 'https://www.youtube.com/embed/' . esc_attr( $query_params['v'] );
}
