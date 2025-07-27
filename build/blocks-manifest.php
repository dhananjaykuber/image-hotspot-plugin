<?php
// This file is generated. Do not modify it manually.
return array(
	'image-hotspot' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hotspot/image-hotspot',
		'version' => '0.1.0',
		'title' => 'Image Hotspot',
		'category' => 'widgets',
		'icon' => 'marker',
		'description' => 'Make your images interactive by adding clickable hotspots with tooltips, links, and rich content.',
		'keywords' => array(
			'hotspot',
			'image',
			'interactive',
			'tooltip',
			'marker'
		),
		'attributes' => array(
			'image' => array(
				'type' => 'object',
				'properties' => array(
					'url' => array(
						'type' => 'string',
						'default' => ''
					),
					'id' => array(
						'type' => 'string',
						'default' => ''
					)
				),
				'default' => array(
					'url' => null,
					'id' => null
				)
			),
			'imageDescription' => array(
				'type' => 'string',
				'default' => ''
			),
			'hotspots' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'index' => array(
							'type' => 'number',
							'default' => 0
						),
						'icon' => array(
							'type' => 'string',
							'default' => ''
						),
						'title' => array(
							'type' => 'string',
							'default' => ''
						),
						'showTitle' => array(
							'type' => 'boolean',
							'default' => true
						),
						'description' => array(
							'type' => 'string',
							'default' => ''
						),
						'link' => array(
							'type' => 'string',
							'default' => ''
						),
						'enableAnimation' => array(
							'type' => 'boolean',
							'default' => true
						),
						'customColors' => array(
							'type' => 'boolean',
							'default' => false
						),
						'backgroundColor' => array(
							'type' => 'string',
							'default' => ''
						),
						'titleColor' => array(
							'type' => 'string',
							'default' => ''
						),
						'tooltipColor' => array(
							'type' => 'string',
							'default' => ''
						),
						'tooltipTextColor' => array(
							'type' => 'string',
							'default' => ''
						),
						'videoURL' => array(
							'type' => 'string',
							'default' => ''
						),
						'position' => array(
							'type' => 'object',
							'properties' => array(
								'x' => array(
									'type' => 'number',
									'default' => 0
								),
								'y' => array(
									'type' => 'number',
									'default' => 0
								)
							),
							'default' => array(
								'x' => 0,
								'y' => 0
							)
						)
					)
				)
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'image-hotspot',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
