import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (event, title) => {
    event.preventDefault(); // Prevent default navigation behavior
    setActiveItem(title); // Update active item state
    console.log(`Clicked on ${title}`);
  };

  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        {SidebarData.map((val) => (
          <li
            key={val.title}
            className={`sidebarList-row ${activeItem === val.title ? 'active' : ''}`}
            onClick={(e) => handleItemClick(e, val.title)}
          >
            <div id='icon'>{val.icon}</div>
            <div id='title' className='ms-2'>{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
