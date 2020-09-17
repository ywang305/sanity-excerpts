import { FcAddressBook } from 'react-icons/fc';

export default {
	name: 'note',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'content',
			title: 'Content',
			type: 'blockContent',
		},
		{
			name: 'books',
			title: 'Books',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'book' },
				},
			],
		},
		{
			name: 'excerpts',
			title: 'Excerpts',
			type: 'array',
			of: [
				{
					name: 'excerpt',
					title: 'Excerpt',
					type: 'excerpt',
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
			excerpts: 'excerpts',
		},
		prepare(selection) {
			const { title, excerpts } = selection;
			const subtitle = `excerpts: ${excerpts.length}`;
			return { title, subtitle };
		},
	},
};
