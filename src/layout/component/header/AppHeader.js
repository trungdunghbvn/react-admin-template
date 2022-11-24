/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebarAction } from '../../../reducers/appReducer';

import { ReactComponent as TogglerSidebar } from './icons/toggle-sidebar.svg';

import './Header.scss';

export default function AppHeader() {
  const dispatch = useDispatch();
  const toggleSiderbar = () => {
    dispatch(toggleSidebarAction());
  };

  return (
    <div className="Header">
      <div className="Header__Container">
        <div className="Header__Toggler" onClick={toggleSiderbar}>
          <TogglerSidebar />
        </div>
        AppHeader
      </div>
    </div>
  );
}
