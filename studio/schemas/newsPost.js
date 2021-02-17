export default {
  name: 'newsPost',
  type: 'document',
  title: 'Nyheter',
  fields: [
    {
      type: 'titleString',
      name: 'title',
    },
    {
      type: 'text',
      title: 'Kortare beskrivning',
      name: 'descriptionText',
      description: 'Används för förhandsvisning och för SEO.',
    },
    { type: 'defaultSlug', name: 'slug' },
    { type: 'bodyPortableText', name: 'Body' },
    {
      name: 'author',
      type: 'reference',
      weak: true,
      title: 'Redaktör',
      to: [{ type: 'editor' }],
    },
  ],
  orderings: [
    {
      name: 'createdDateAsc',
      title: 'Created date new–>old',
      by: [
        {
          field: '_createdAt',
          direction: 'desc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'bodyImage',
      name: 'name',
    },
    prepare({ title = 'No name', slug = {}, media, name = 'news' }) {
      const path = `/${name}/${slug.current}`

      return {
        path,
        title,
        media,
        subtitle: path,
      }
    },
  },
}
