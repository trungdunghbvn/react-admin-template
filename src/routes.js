import React from 'react';

const Colors = React.lazy(() => import('./pages/views/base/colors/Color'));
const Typography = React.lazy(() => import('./pages/views/base/typography/Typography'));


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/theme/colors', name: 'Colors', element: Colors },
    { path: '/theme/typography', name: 'Typography', element: Typography },
    { path: '/base', name: 'Base', element: Colors, exact: true },
    { path: '/base/accordion', name: 'Accordion', element: Colors },
    { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Colors },
    { path: '/base/cards', name: 'Cards', element: Colors },
    { path: '/base/carousels', name: 'Carousel', element: Colors },
    { path: '/base/collapses', name: 'Collapse', element: Colors },
    { path: '/base/list-groups', name: 'List Groups', element: Colors },
    { path: '/base/navs', name: 'Navs', element: Colors },
    { path: '/base/paginations', name: 'Paginations', element: Colors },
    { path: '/base/placeholders', name: 'Placeholders', element: Colors },
    { path: '/base/popovers', name: 'Popovers', element: Colors },
    { path: '/base/progress', name: 'Progress', element: Colors },
    { path: '/base/spinners', name: 'Spinners', element: Colors },
    { path: '/base/tables', name: 'Tables', element: Colors },
    { path: '/base/tooltips', name: 'Tooltips', element: Colors },
    { path: '/buttons', name: 'Buttons', element: Colors, exact: true },
    { path: '/buttons/buttons', name: 'Buttons', element: Colors },
    { path: '/buttons/dropdowns', name: 'Dropdowns', element: Colors },
    { path: '/buttons/button-groups', name: 'Button Groups', element: Colors },
  ];
  
  export default routes;
  