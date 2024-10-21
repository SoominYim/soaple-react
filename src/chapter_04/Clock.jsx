import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>현재 시간: {new Date().toLocaleString()}</h1>
    </div>
  );
}

export default Clock;
