/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../../utilities/css';

export default function AppSidebarNav({ items }) {
  const [showItems, setShowItems] = useState(-1);

  const navItem = (item, index) => {
    const { label, to } = item;
    if (item.type === 'title') {
      return (
        <div key={index} className="NavTitle">
          {label}
        </div>
      );
    }
    return (
      <div key={index} className="NavItem">
        <Link to={to}>{label}</Link>
      </div>
    );
  };

  const changeShowItems = index => {
    setShowItems(showItems === index ? -1 : index);
  };

  const groupItemClass = index => classNames('NavGroup', index === showItems && 'NavGroup--active');

  const navGroup = (item, idx) => (
    <div className={groupItemClass(idx)} key={idx}>
      <div className="NavItem NavItem--toggle" onClick={() => changeShowItems(idx)}>
        {item.icon && <div className='Navicon'>{item.icon}</div>}
        {item.label}
      </div>
      <div className="NavGroup__Item">
        {item.items?.map((subItem, index) =>
          subItem.items ? navGroup(subItem, index) : navItem(subItem, index),
        )}
      </div>
    </div>
  );

  return (
    <>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </>
  );
}
