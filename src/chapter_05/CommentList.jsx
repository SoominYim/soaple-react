import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "홍길동",
    comment: "asdasd",
  },
  {
    name: "홍길동",
    comment: "asdasd",
  },
  {
    name: "홍길동",
    comment: "asdasd",
  },
  {
    name: "홍길동",
    comment: "asdasd",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((v) => (
        <Comment name={v.name} comment={v.comment} />
      ))}
    </div>
  );
}

export default CommentList;
