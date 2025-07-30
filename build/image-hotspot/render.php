<?php
/**
 * Template of the `image-hotspot` block.
 *
 * @package image-hotspot
 */

$image             = $attributes['image'] ?? null;
$image_description = $attributes['imageDescription'] ?? '';
$hotspots          = $attributes['hotspots'] ?? array();

?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="imagehotspot__wrapper">
		<?php
		if ( ! empty( $image ) && is_array( $image ) && ! empty( $image['id'] ) ) :
			echo wp_get_attachment_image(
				$image['id'],
				'full',
				false,
				array(
					'class' => 'imagehotspot__image',
					'alt'   => esc_attr( $image_description ),
				)
			);
		endif;

		if ( is_array( $hotspots ) && ! empty( $hotspots ) ) :
			foreach ( $hotspots as $hotspot ) :
				$enable_animation   = $hotspot['enableAnimation'] ?? true;
				$hotspot_color      = $hotspot['backgroundColor'] ?? '#0f5ff8';
				$title_color        = $hotspot['titleColor'] ?? '#ffffff';
				$tooltip_color      = $hotspot['tooltipColor'] ?? '#ffffff';
				$tooltip_text_color = $hotspot['tooltipTextColor'] ?? '#000000';
				$icon               = $hotspot['icon'] ?? '';
				$show_title         = $hotspot['showTitle'] ?? true;
				$hotspot_title      = $hotspot['title'] ?? '';
				$description        = $hotspot['description'] ?? '';
				$video_url          = $hotspot['videoURL'] ?? '';
				$hotspot_link       = $hotspot['link'] ?? '';
				$position           = $hotspot['position'] ?? array(
					'x' => 10,
					'y' => 10,
				);
				$position_x         = isset( $position['x'] ) ? floatval( $position['x'] ) : 10;
				$position_y         = isset( $position['y'] ) ? floatval( $position['y'] ) : 10;

				// Determine the tag name based on whether a link is provided.
				$tag_name = ! empty( $hotspot_link ) ? 'a' : 'button';

				?>

				<div class="imagehotspot__container">
					<<?php printf( '%1$s %2$s', esc_html( $tag_name ), ! empty( $hotspot_link ) ? sprintf( 'href="%s"', esc_url( $hotspot_link ) ) : '' ); ?>
						class="<?php printf( 'imagehotspot__hotspot %s', $enable_animation ? 'is-animated' : '' ); ?>"
						style="<?php printf( '--image-hotspot-color: %1$s; --image-hotspot-title-color: %2$s; --image-hotspot-icon: %3$s; left: %4$s%%; top: %5$s%%;', esc_attr( $hotspot_color ), esc_attr( $title_color ), esc_attr( $icon ), esc_attr( $position_x ), esc_attr( $position_y ) ); ?>"
					>
						<?php
						if ( ! empty( $icon ) ) {
							echo '<span class="imagehotspot__hotspot-icon" role="presentation"></span>';
						}

						if ( $show_title && ! empty( $hotspot_title ) ) {
							printf( '<span class="imagehotspot__hotspot-title">%s</span>', esc_html( $hotspot_title ) );
						}
						?>
					</<?php printf( '%s', esc_html( $tag_name ) ); ?>>

					<?php if ( ! empty( $description ) || ! empty( $video_url ) ) : ?>
						<div
							class="imagehotspot__tooltip"
							style="<?php printf( '--image-hotspot-tooltip-color: %1$s; --image-hotspot-tooltip-text-color: %2$s;', esc_attr( $tooltip_color ), esc_attr( $tooltip_text_color ) ); ?>"
						>
							<?php if ( ! empty( $video_url ) ) : ?>
								<iframe
									width="560"
									height="315"
									src="<?php echo esc_url( wp_image_hotspot_get_youtube_embed_url( $video_url ) ); ?>"
									title="<?php esc_attr_e( 'YouTube video player', 'image-hotspot' ); ?>"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
									class="imagehotspot__tooltip-video"
								></iframe>
							<?php endif; ?>

							<div class="imagehotspot__tooltip-description">
								<?php echo wp_kses_post( $description ); ?>
							</div>
						</div>
					<?php endif; ?>
				</div>

				<?php
			endforeach;
		endif;

		?>
	</div>
</div>
