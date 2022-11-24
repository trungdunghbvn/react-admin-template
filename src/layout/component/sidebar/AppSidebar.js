import React from 'react';
import './Sidebar.scss';
import AppSidebarNav from './AppSidebarNav';

import navigation from '../../../_nav';

export default function AppSidebar() {

  return <div className="Sidebar">
    <div className='Sidebar__Brand'>
      REACT UI
    </div>
    <div className='Sidebar__Nav'>
      <AppSidebarNav items={navigation}/>
    </div>
  </div>;
}
