export default {
  title: 'Skicka användaren hit',
  name: 'sendTo',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      title: 'Referens',
      description:
        'Sök på den sidan du vill länka till. T.ex nyheter, community, /api eller en specifik post',
      to: [
        { type: 'aboutUsPage' },
        { type: 'newsPage' },
        { type: 'projectPage' },
        { type: 'manifestPage' },
        { type: 'api' },
        { type: 'communicationPage' },
        { type: 'apiPage' },
        { type: 'newsPost' },
        { type: 'project' },
      ],
    },
  ],
}
