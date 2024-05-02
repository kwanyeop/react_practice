import React, { useState } from 'react';
import MemoForm from './components/MemoForm';
import MemoList from './components/MemoList';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import './App.css'; // App.css 파일 import
import { addMemo, deleteMemo, getAllMemos, searchMemos, filterMemosByImportance } from './data/memos';

const App: React.FC = () => {
  const [memos, setMemos] = useState(getAllMemos()); // useState 훅을 사용하여 메모들의 상태를 관리

  const handleAddMemo = (title: string, content: string, importance: number) => {
    addMemo(title, content, importance); // data/memos 모듈의 addMemo 함수 호출
    setMemos(getAllMemos()); // 메모 목록을 다시 불러와서 상태 업데이트
  };

  const handleDeleteMemo = (id: number) => {
    deleteMemo(id);
    setMemos(getAllMemos());
  };

  const handleSearch = (query: string) => {
    const searchResult = searchMemos(query);
    setMemos(searchResult);
  };

  const handleFilterByImportance = (importance: number) => {
    if (importance === 0) {
      setMemos(getAllMemos());
    } else {
      const filteredMemos = filterMemosByImportance(importance);
      setMemos(filteredMemos);
    }
  };

  return (
    <div>
      <h1>일정 메모 시스템</h1>
      <MemoForm onAddMemo={handleAddMemo} />
      <SearchBar onSearch={handleSearch} />
      <Sidebar onFilterByImportance={handleFilterByImportance} />
      <MemoList memos={memos} onDeleteMemo={handleDeleteMemo} />
    </div>
  );
};

export default App;
