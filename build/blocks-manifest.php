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
				'default' => array(
					
				)
			),
			'imageDescription' => array(
				'type' => 'string',
				'default' => ''
			),
			'hotspots' => array(
				'type' => 'array',
				'default' => array(
					
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
