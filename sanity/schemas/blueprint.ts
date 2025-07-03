import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blueprint',
  title: 'Blueprint',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'A brief summary of the blueprint (max 200 characters).',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Case Study', value: 'Case Study' },
          { title: 'Monetization', value: 'Monetization' },
          { title: 'Tech Tutorial', value: 'Tech Tutorial' },
          { title: 'Business Growth', value: 'Business Growth' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        {
          name: 'codeBlock',
          title: 'Code Block',
          type: 'object',
          fields: [
            { name: 'language', title: 'Language', type: 'string' },
            { name: 'code', title: 'Code', type: 'text' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
