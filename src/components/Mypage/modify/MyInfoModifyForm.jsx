import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../styles/globalStyled';
import * as Styled from './Styled';
import Profile from '../profile/Profile';
import { myInfo, myInfoModify } from '../../../lib/apis/mypage/mypageService';
const MyInfoModifyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    //formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const [imgUrl, setImgUrl] = useState(
    'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png'
  );
  const getInfo = async () => {
    const { data } = await myInfo();
    //setImgUrl(data.image);
    reset(data);
  };
  useEffect(() => {
    getInfo();
  }, []);

  const onImgHandler = (e) => {
    const file = e.target.files[0];
    const image = URL.createObjectURL(file);
    setImgUrl(image);
  };
  const onSubmit = async (data) => {
    console.log(data.image);
    const { data: data1 } = await myInfoModify(data);
    console.log(data1);
  };

  return (
    <MainContainerDiv>
      <MainContentsDiv style={{ marginTop: '4.286rem' }}>
        <Profile />
        <Styled.MyInfoDiv>
          <Styled.MyInfoMainDiv>
            <Styled.MainTag>회원정보 수정</Styled.MainTag>
            <Styled.MainForm onSubmit={handleSubmit(onSubmit)}>
              <Styled.Tag>프로필</Styled.Tag>
              <Styled.InputForm>
                <Styled.ProfileImageDiv>
                  <img src={imgUrl} alt="profile" />
                </Styled.ProfileImageDiv>
                <Styled.ProfileInput
                  type="file"
                  {...register('image')}
                  onChange={onImgHandler}
                />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>이름</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" {...register('name')} />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>닉네임</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" {...register('nickname')} />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>아이디</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" {...register('email')} />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>비밀번호</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="password" {...register('password')} />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>생년월일</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="date" {...register('birth')} />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.Tag>주소</Styled.Tag>
              <Styled.InputForm>
                <Styled.Input type="text" {...register('address')} />
                <Styled.ModifyBtn>수정하기</Styled.ModifyBtn>
              </Styled.InputForm>
              <Styled.RegisterBtn type="submit">완료</Styled.RegisterBtn>
            </Styled.MainForm>
          </Styled.MyInfoMainDiv>
        </Styled.MyInfoDiv>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default MyInfoModifyForm;
