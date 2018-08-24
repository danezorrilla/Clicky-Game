import React from "react";
//import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img class="img-thumbnail" alt={props.name} src={props.image} onClick={() => props.selectImage(props.id)} />
    </div>

  </div>
);

export default FriendCard;
