import React from "react";
import propTypes from "prop-types";
import style from "./FriendListItem.module.css";

const FriendListItem = ({ friends }) => (
  <ul className={style.friend_list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className={style.item}>
        <span
          className={` ${isOnline ? style.isOnline : style.isOffline} ${
            style.status
          } `}
        />
        <img className={style.avatar} src={avatar} alt="" width="48" />
        <p className={style.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};
export default FriendListItem;
