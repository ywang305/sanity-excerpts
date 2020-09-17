export default {
  name: 'book',
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
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'note',
      title: 'Note Ref',
      type: 'reference',
      to: { type: 'note' },
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishDate: 'publishDate',
      media: 'image',
    },
    prepare(selection) {
      const { publishDate } = selection;
      const subtitle = publishDate.split('-').slice(0, 2).join('-');
      return { ...selection, subtitle };
    },
  },
};
