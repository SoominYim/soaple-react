import React from "react";

const Avatar = (props) => {
  return <img src={props.user.avatarUrl} alt={props.user.name} className="avatar" />;
};

export default Avatar;
