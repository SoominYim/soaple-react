import React, { useEffect, useState } from "react";

function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  const ServerAPI = "";

  function handStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handStatusChange);
    };
  });
  if (isOnline === null) {
    return "대기중";
  }

  return isOnline ? "온라인" : "오프라인";
}

export default UserStatus;
