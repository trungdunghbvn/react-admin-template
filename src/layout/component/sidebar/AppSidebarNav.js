/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link } from 'react-router-dom';

export default function AppSidebarNav({ items }) {

  const navItem = (item, index) => {
    const { label, to } = item;
    if (item.type === 'title') {
      return <div key={index} className="NavTitle">{label}</div>;
    }
    return (
      <div key={index} className="NavItem">
        <Link to={to}>{label}</Link>
      </div>
    );
  };

  const navGroup = (item, idx) => (
    <React.Fragment key={idx} >
      <div className="NavItem NavGroup">{item.label}</div>
      {item.items?.map((subItem, index) =>
        subItem.items ? navGroup(subItem, index) : navItem(subItem, index),
      )}
    </React.Fragment>
  );

  return (
    <>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </>
  );
}
