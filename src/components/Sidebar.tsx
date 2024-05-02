import React, { useState } from 'react';

interface SidebarProps {
  onFilterByImportance: (importance: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterByImportance }) => {
  // 중요도에 따라 필터링을 수행하는 핸들러 함수
  const handleFilterByImportance = (importance: number) => {
    // 부모 컴포넌트로부터 전달받은 onFilterByImportance 콜백 함수를 호출하여 중요도를 전달
    onFilterByImportance(importance);
  };

  // JSX를 반환하여 화면에 렌더링
  return (
    <div>
      <h3>중요도 필터</h3>
      <button onClick={() => handleFilterByImportance(1)}>1</button>
      <button onClick={() => handleFilterByImportance(2)}>2</button>
      <button onClick={() => handleFilterByImportance(3)}>3</button>
      <button onClick={() => handleFilterByImportance(4)}>4</button>
      <button onClick={() => handleFilterByImportance(5)}>5</button>
    </div>
  );
};

export default Sidebar;
