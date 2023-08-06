import { useState } from 'react';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../styles/globalStyled';
import * as Styled from './Styled';
import Profile from '../profile/Profile';

const MyInfoModifyForm = () => {
  return (
    <MainContainerDiv>
      <MainContentsDiv style={{ marginTop: '4.286rem' }}>
        <Profile />
        <Styled.MyInfoDiv>
          <Styled.MyInfoMainDiv>
            <Styled.MainTag>회원정보 수정</Styled.MainTag>
            <Styled.MainForm>
              <Styled.Tag>프로필</Styled.Tag>
              <Styled.InputForm>
                <Styled.ProfileImageDiv>
                  <img
                    src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png"
                    alt="profile"
                  />
                </Styled.ProfileImageDiv>
                <Styled.ProfileInput type="file" />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>이름</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>닉네임</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>아이디</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>비밀번호</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="password" />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>생년월일</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="date" />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>주소</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.RegisterBtn>완료</Styled.RegisterBtn>
            </Styled.MainForm>
          </Styled.MyInfoMainDiv>
        </Styled.MyInfoDiv>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default MyInfoModifyForm;
