// FinalPage.tsx
import React from 'react';
import Sidebar from '../blocks/Sidebar';
import styled from 'styled-components';
import axios from 'axios'; // axios import 추가
import '../../assets/fonts/Font.css';
import progressbar from '../../assets/images/progressbar4.svg';
import output from '../../assets/images/Output.svg';

const FinalPage: React.FC = () => {
    const downloadPDF = () => {
        axios({
            url: '/path/to/pdf', // 서버에서 PDF를 제공하는 경로로 변경
            method: 'GET',
            responseType: 'blob',
        }).then((response: any) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'document.pdf');
            document.body.appendChild(link);
            link.click();
        }).catch((error: any) => {
            console.error('PDF 다운로드 실패:', error);
        });
    };

    return (
        <Container>
            <Sidebar />
            <FixedContainer>
                <ProgressBar>
                    <StyledImage src={progressbar} alt="Example" />
                </ProgressBar>
                <TextContainer>
                    <Title>
                        <span>교재가 </span>
                        <span style={{ color: "#399AF9" }}>완성 </span>
                        <span>됐어요!</span><br />
                    </Title>
                    <Description>
                        <span>산업안전보건공단의 자료와 산업재해 데이터를 바탕으로 </span><br />
                        <span>학습자료를 추천하고, 제작했습니다. 제공된 자료의 수정을 원하시면 우측 아이콘을 클릭해 주세요</span>
                    </Description>
                    <ButtonContainer>
                        <Button>QR코드</Button>
                        <Button onClick={downloadPDF}>PDF 다운로드</Button>
                        <Dropdown>
                            <DropdownButton>한국어 ▼</DropdownButton>
                            <DropdownContent>
                                <DropdownItem>한국어</DropdownItem>
                                <DropdownItem>영어</DropdownItem>
                                <DropdownItem>중국어</DropdownItem>
                                <DropdownItem>태국어</DropdownItem>
                                <DropdownItem>베트남어</DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </ButtonContainer>
                </TextContainer>
                <FormContainer>
                    <img src={output} alt="output" />
                </FormContainer>
            </FixedContainer>
        </Container>
    );
};

export default FinalPage;

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #027b8b;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #027b8b;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #025e6b;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #027b8b;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #027b8b;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #025e6b;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
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
