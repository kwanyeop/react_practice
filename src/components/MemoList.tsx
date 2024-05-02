import React from 'react';

// Memo 인터페이스 정의: 각 메모의 타입을 지정
interface Memo {
  id: number;
  title: string;
  content: string;
  importance: number;
  timestamp: number;
}

// MemoListProps 인터페이스 정의: MemoList 컴포넌트의 props 타입을 지정
interface MemoListProps {
  memos: Memo[]; // 메모 배열
  onDeleteMemo: (id: number) => void; // 삭제 버튼 클릭 시 호출할 콜백 함수
}

// MemoList 컴포넌트 선언
const MemoList: React.FC<MemoListProps> = ({ memos, onDeleteMemo }) => {
  return (
    <div>
      {memos.map((memo) => (
        <div key={memo.id}>
          <h3>{memo.title}</h3>
          <p>{memo.content}</p>
          <p>중요도: {memo.importance}</p>
          <p>등록 시간: {new Date(memo.timestamp).toLocaleString()}</p>
          <button onClick={() => onDeleteMemo(memo.id)}>삭제</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MemoList;
