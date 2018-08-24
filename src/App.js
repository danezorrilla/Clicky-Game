import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friends: friends,
    selectedFriends: friends,
    topScore: 0,
    currentScore: 0
  };

  shuffleArray = array => {
    for(let i = 0; i < array.length; i++){
      let j = Math.floor(Math.random() * (array.length - 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  selectImage = id =>{
    console.log("Image is clicked");

    const{friends, selectedFriends, topScore, currentScore} = this.state

    const selectFriend = selectedFriends.find(friend => friend.id === id);

    if(selectFriend === undefined){
      this.setState({
        topScore: currentScore > topScore ? currentScore : topScore,
        currentScore: 0,
        friends: friends,
        selectedFriends: friends
      });

    } else{
      const newFriend = selectedFriends.filter(friend => friend.id !== id)
      this.setState({
        currentScore: currentScore + 1,
        friends: friends,
        selectedFriends: newFriend
      });
    }

    this.shuffleArray(friends);

  };

  render() {
    return (
      <Wrapper>
        <Title currentScore={this.state.currentScore} topScore={this.state.topScore}>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            selectImage={this.selectImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>

    );
  }
}

export default App;
