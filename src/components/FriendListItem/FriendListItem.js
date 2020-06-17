import React from "react";
import propTypes from "prop-types";
import style from "./FriendListItem.module.css";

const FriendListItem = ({ friends }) => (
  <ul className={style.friend_list}>
    {friends.map((friend) => (
      <li key={friend.id} className={style.item}>
        <span
          style={{ backgroundColor: friend.isOnline ? "#008000" : "#ff0000" }}
          className={style.status}
        ></span>
        <img className={style.avatar} src={friend.avatar} alt="" width="48" />
        <p className={style.name}>{friend.name}</p>
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
