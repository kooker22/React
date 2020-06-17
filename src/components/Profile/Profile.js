import React from "react";
import propTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, imageUrl, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={imageUrl} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.stats_item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.stats_item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  imageUrl: "https://i.stack.imgur.com/l60Hf.png",
};
Profile.propTypes = {
  imageUrl: propTypes.string,
  tag: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number).isRequired,
};

export default Profile;
