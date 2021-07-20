import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedId, setSelectedId] = useState(users[0].id)

  // console.log(selectedId)
  function handleUserClick(user) {
    setSelectedId(user.id)
  }
  function handleTweetLike(likedTweet) {
    const updatedLikes = users.map((user) => {
      if (user.id !== selectedId) {
        return user;
      }
      return {
        ...user, tweets: user.tweets.map(tweet => {
          if (tweet !== likedTweet) return tweet;

          return { ...tweet, favorite_count: tweet.favorite_count + 1 }
        })
      }
    })
    setUsers(updatedLikes)
  }

  const selectedUser = users.find(select => select.id === selectedId)

  // console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} onUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={selectedUser} handleTweetLike={handleTweetLike} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
