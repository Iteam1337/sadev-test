export default {
  name: 'api',
  type: 'document',
  title: 'API:er',
  initialValue: () => ({
    tableOfContents: true,
  }),
  fields: [
    {
      type: 'titleString',
      name: 'title',
    },
    { type: 'defaultSlug', name: 'slug' },
    {
      type: 'text',
      title: 'Kortare beskrivning',
      name: 'descriptionText',
      description: 'Används för förhandsvisning och för SEO.',
    },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'tableOfContents', name: 'tableOfContents' },
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
    prepare({ title = 'Api', slug = {}, media, name = 'api' }) {
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
