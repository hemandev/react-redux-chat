import React from 'react';
import './Sidebar.css';
import UserCard from '../../containers/userCard/UserCard';

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(user => (
        <UserCard user={user} key={user.user_id} />
      ))}
    </aside>
  );
};
export default Sidebar;
