let memoId = 0; // 메모의 고유 ID를 관리하기 위한 변수

// 메모 객체의 인터페이스 정의
export interface Memo {
  id: number;
  title: string;
  content: string;
  importance: number;
  timestamp: number;
}

const memos: Memo[] = []; // 메모들을 저장할 배열

export const addMemo = (title: string, content: string, importance: number): void => {
  const newMemo: Memo = {
    id: memoId++,
    title,
    content,
    importance,
    timestamp: Date.now(), // 현재 시간을 타임스탬프로 저장
  };
  memos.push(newMemo); // memos 배열에 새로운 메모 추가
};

// 특정 ID의 메모를 삭제하는 함수
export const deleteMemo = (id: number): void => {
  const index = memos.findIndex((memo) => memo.id === id); // ID로 메모의 인덱스 찾기
  if (index !== -1) { // 인덱스가 유효한 경우
    memos.splice(index, 1); // 해당 인덱스의 메모 삭제
  }
};

// 모든 메모를 가져오는 함수
export const getAllMemos = (): Memo[] => {
  return [...memos]; // memos 배열의 복사본을 반환하여 원본 배열 보호 (불변성 유지)
};

// 검색어(query)에 따라 메모를 검색하는 함수
export const searchMemos = (query: string): Memo[] => {
  const lowerCaseQuery = query.toLowerCase(); // 검색어를 소문자로 변환하여 대소문자 구분 없이 검색
  return memos.filter(
    (memo) =>
      memo.title.toLowerCase().includes(lowerCaseQuery) || // 제목에 검색어 포함 여부
      memo.content.toLowerCase().includes(lowerCaseQuery) // 내용에 검색어 포함 여부
  );
};

// 중요도(importance)에 따라 메모를 필터링하는 함수
export const filterMemosByImportance = (importance: number): Memo[] => {
  return memos.filter((memo) => memo.importance === importance); // 해당 중요도와 일치하는 메모들을 필터링하여 반환
};
