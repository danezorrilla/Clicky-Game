import React from "react";
import "./Title.css";

const Title = props => 
<div>
<h1 className="title">{props.children}</h1>
<span>Current Score:{props.currentScore}  | Top Score:{props.topScore}  </span>
</div>

export default Title;