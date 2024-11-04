import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  // 재렌더링 될 때마다 매번 함수가 새로 정의됨
  const handleClick = (e) => {
    // 클릭 이벤트 처리
  };

  return (
    <div>
      <p>총 {count}번 클릭했습니다. </p>
      <button onClick={() => setCount(count + 1)}> 클릭</button>
    </div>
  );
}

export default Counter;
