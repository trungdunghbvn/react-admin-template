import React from 'react';

import { ReactComponent as BaseIcon } from './layout/component/sidebar/icons/base.svg';
import { ReactComponent as ButtonIcon } from './layout/component/sidebar/icons/buttons.svg';

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
    icon: <BaseIcon />,
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
  {
    type: 'group',
    label: 'Buttons',
    icon: <ButtonIcon />,
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
