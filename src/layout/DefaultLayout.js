/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppContent, AppFooter, AppHeader, AppSidebar } from './component';
import { toggleSidebarAction } from '../reducers/appReducer';

import { classNames } from '../utilities/css';
import './Layout.scss';

export default function DefaultLayout() {
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);

  const isSidebar = useSelector(state => state.appReducer.isSidebar);

  const siderbarClass = classNames(isSidebar && 'Sidebar-Active');

  const toggleSiderbar = () => {
    dispatch(toggleSidebarAction());
  };

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      if (!isMobile && width < 768) {
        setIsMobile(true);
      }
      if (width >= 768 && isMobile) {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [isMobile, isSidebar]);

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
      {isMobile && isSidebar && (
        <div className="Sidebar-Backdrop" onClick={() => toggleSiderbar()} />
      )}
    </div>
  );
}
