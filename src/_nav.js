const _nav = [
  {
    type: 'title',
    label: 'Theme',
  },
  {
    label: 'Colors',
    to: '/theme/colors',
  },
  {
    label: 'Typography',
    to: '/theme/typography',
  },
  {
    type: 'title',
    label: 'Components',
  },
  {
    type: 'group',
    label: 'Base',
    items: [
      {
        label: 'Accordion',
        to: '/base/accordion',
      },
      {
        label: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        label: 'Cards',
        to: '/base/cards',
      },
      {
        label: 'Pagination',
        to: '/base/paginations',
      },
    ],
  },
];

export default _nav;
