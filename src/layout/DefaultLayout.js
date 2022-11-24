import React from 'react';
import { useSelector } from 'react-redux';

import { AppContent, AppFooter, AppHeader, AppSidebar } from './component';
import {classNames} from '../utilities/css';
import './Layout.scss';

export default function DefaultLayout() {
  const isSidebar = useSelector(state => state.appReducer.isSidebar);

  const siderbarClass = classNames(
    isSidebar && 'Sidebar-Active'
  );

  return (
    <div className={siderbarClass}>
      <AppSidebar />
      <div className="Wrapper">
        <AppHeader />
        <div>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
}
