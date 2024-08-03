// ThirdPage.tsx
import React from 'react';
import Sidebar from '../blocks/Sidebar';
import styled from 'styled-components';
import axios from 'axios';
import '../../assets/fonts/Font.css';
import progressbar from '../../assets/images/progressbar3.svg'; 
import DetailForm from '../blocks/detailTypeForm';

const ThirdPage: React.FC = () => {

    return (
        <Container>
            <Sidebar />
            <FixedContainer>
                <ProgressBar>
                    <StyledImage src={progressbar} alt="Example" />
                </ProgressBar>
                <TextContainer>
                    <Title>
                        <span style={{ color: "#399AF9" }}>세부사항</span>
                        <span>을 입력해주세요</span><br />
                    </Title>
                    <Description>위험요인 선택 및 추가 당부사항을 입력해주세요.</Description>
                </TextContainer>
                <FormContainer>
                    <DetailForm />
                </FormContainer>
            </FixedContainer>
        </Container>
    );
};

export default ThirdPage;

const Container = styled.div`
  display: flex;
`;

const FixedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 918px;
  height: 100vh; /* 전체 화면 높이 */
  margin-top: 40px;
  margin-left: 116px; 
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto; /* 세로 스크롤 추가 */
`;

const ProgressBar = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 수직 정렬을 위로 설정 */
  align-items: flex-start; /* 수평 정렬을 왼쪽으로 설정 */
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Pretendard-Bold';
  font-size: 32px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: 'Pretendard-Light';
  color: #757575;
  margin-top: 0px;
  margin-bottom: 30px;
  text-align: left; /* 왼쪽 정렬 */
  width: 80%;
`;

const FormContainer = styled.div`
  width: 100%;
  flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F7F7FC;
  border-radius: 20px;
  margin-bottom: 80px; 
  overflow-y: auto; /* 세로 스크롤 추가 */
`;

const ButtonContainerBottom = styled.div`
  display: flex;
  justify-content: flex-end; /* 버튼들을 오른쪽에 정렬 */
  width: 100%;
  margin-top: auto; /* 버튼들을 컨테이너의 맨 아래로 밀기 */
  padding: 20px 0;
  box-sizing: border-box;
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#027b8b')};
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#025e6b')};
  }
  margin-left: 10px;
`;
