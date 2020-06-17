import React, { Fragment } from "react";
//Components
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendListItem from "./components/FriendListItem/FriendListItem";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import randomColor from "randomcolor";
//json data
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <Profile
        tag={user.tag}
        imageUrl={user.avatar}
        name={user.name}
        location={user.location}
        stats={user.stats}
      ></Profile>

      <Statistics stats={statisticalData}></Statistics>
      <FriendListItem friends={friends}></FriendListItem>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
}

export default App;
