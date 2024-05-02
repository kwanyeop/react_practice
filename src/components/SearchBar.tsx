import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

// 함수형 컴포넌트 SearchBar 선언
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // 검색어 상태를 관리하는 searchQuery 상태와 상태를 변경하는 setSearchQuery 함수를 useState 훅을 통해 선언
  const [searchQuery, setSearchQuery] = useState('');

   // 검색 버튼 클릭 시 동작하는 핸들러 함수
  const handleSearch = () => {
    // 부모 컴포넌트로부터 전달받은 onSearch 콜백 함수를 호출하여 검색어(searchQuery) 전달
    onSearch(searchQuery);
  };

  // JSX를 반환하여 화면에 렌더링
  return (
    <div>
      <input
        type="text"
        placeholder="검색어 입력"
        value={searchQuery} // 입력 필드의 값은 searchQuery 상태와 동기화됨
        onChange={(e) => setSearchQuery(e.target.value)} // 입력값이 변경될 때마다 setSearchQuery를 통해 searchQuery 업데이트
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
