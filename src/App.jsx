import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트 정의
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 20px 30px;
  font-size: 18px;
  cursor: pointer;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #e05a4f;
  }
`;

const Celebration = styled.div`
  font-size: 3rem;
  margin-top: 30px;
`;

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState('이 버튼 누르지 마세요');

  const handleClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;

      if (newCount === 10) {
        setMessage('축하합니다! 아무 일도 안 일어났습니다!');
      } else {
        setMessage(`진짜 눌러버렸네? ${newCount}번째!`);
      }

      return newCount;
    });
  };

  return (
    <AppContainer>
      <Title>{message}</Title>
      <Button onClick={handleClick}>버튼 누르기</Button>
      {clickCount === 20 && <Celebration>🎉</Celebration>}
      {clickCount === 30 && <Celebration>🎉</Celebration>}
    </AppContainer>
  );
}

export default App;
