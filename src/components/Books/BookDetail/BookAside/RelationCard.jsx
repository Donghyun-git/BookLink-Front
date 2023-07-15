import * as Styled from './Styled';

const RelationCard = () => {
  return (
    <Styled.AsideCard3>
      <li>
        <Styled.AsideCard3_UserInfoDiv>
          <div>{/* <img src="" alt="프로필 이미지" /> */}</div>
          <div>
            <span>작성자명</span>
          </div>
        </Styled.AsideCard3_UserInfoDiv>
        <div>
          <span>2023.06.23</span>
        </div>
      </li>
      <li>
        <h4>게시글 제목</h4>
      </li>
      <li>
        <p>게시글 내용</p>
      </li>
    </Styled.AsideCard3>
  );
};

export default RelationCard;
