export default {
	name: 'excerpt',
	title: 'Excerpt',
	type: 'image',
	fields: [
		{
			name: 'caption',
			type: 'string',
			title: 'Caption',
			options: {
				isHighlighted: true, // <-- make this field easily accessible
			},
		},
		{
			name: 'keynote',
			type: 'string',
			title: 'key Note',
			options: {
				isHighlighted: true, // <-- make this field easily accessible
			},
		},
	],

	preview: {
		select: {
			title: 'caption',
			media: 'asset',
			subtitle: 'keynote',
		},
	},
};
