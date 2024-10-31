import React from "react";
import UserInfo from "./UserInfo";

const Comment01 = (props) => {
  return (
    <div className="commentName">
      <UserInfo user={props.author} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{FormDataEvent(props.date)}</div>
    </div>
  );
};

// props = {
//   author: {
//     name: "수빡",
//     avatarUrl: "https://...",
//   },
//   text: "댓글입니다.",
//   date: Date.now(),
// };

export default Comment01;
