import React, { useState } from 'react';

// MemoFormProps 인터페이스 정의
interface MemoFormProps {
  onAddMemo: (title: string, content: string, importance: number) => void;
}

const MemoForm: React.FC<MemoFormProps> = ({ onAddMemo }) => {
    // useState 훅을 사용하여 상태 변수 선언 및 초기값 설정
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [importance, setImportance] = useState<number>(1);

    // 메모 추가 버튼 클릭 시 호출되는 이벤트 핸들러 함수
  const handleAddMemo = () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    // 부모 컴포넌트로부터 전달받은 콜백 함수 호출하여 메모 추가
    onAddMemo(title, content, importance);

    // 입력 필드 초기화
    setTitle('');
    setContent('');
    setImportance(1);
  };

  // MemoForm 컴포넌트의 JSX 반환
  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={importance} onChange={(e) => setImportance(Number(e.target.value))}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button onClick={handleAddMemo}>메모 등록</button>
    </div>
  );
};

// MemoForm 컴포넌트를 외부로 내보내기
export default MemoForm;
