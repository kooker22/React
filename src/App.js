import React, { Fragment } from "react";
//Components
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendListItem from "./components/FriendListItem/FriendListItem";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
//json data
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile
        tag={user.tag}
        imageUrl={user.avatar}
        name={user.name}
        location={user.location}
        stats={user.stats}
      />

      <Statistics stats={statisticalData} />
      <FriendListItem friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
