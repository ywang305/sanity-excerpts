import { FcAddressBook } from 'react-icons/fc';

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            name: 'interalLink',
            title: 'Internal Link',
            blockEditor: {
              icon: FcAddressBook,
            },
            type: 'object',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'book' }],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'code',
      options: {
        language: 'js',
        languageAlternatives: [
          'kotlin',
          'swift',
          'python',
          'java',
          'c++',
          'c#',
          'svelte',
        ],
        theme: 'monokai',
      },
    },
    { type: 'image', options: { hotspot: true } },
  ],
};
