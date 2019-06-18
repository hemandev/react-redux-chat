import React from 'react';
import './UserCard.css';
import { setActiveUserId } from '../../../actions';
import { dispatch } from '../../../store';

const UserCard = ({ user }) => {
  const { name, profile_pic, status, user_id } = user;

  const handleClick = () => {
    dispatch(setActiveUserId(user_id));
  };

  return (
    <div className="UserCard" onClick={handleClick}>
      <img src={profile_pic} className="UserCard__picture" alt="Profile" />
      <div className="UserCard__details">
        <p className="UserCard__details-name">{name}</p>
        <p className="UserCard__details-status">{status}</p>
      </div>
    </div>
  );
};

export default UserCard;
