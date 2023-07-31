import * as Styled from './Styled';
import DOMPurify from 'dompurify';

const RelationCard = ({ post }) => {
  const splitDate = post.date.split('T')[0];
  const pureText = DOMPurify.sanitize(post.content, {
    USE_PROFILES: { html: true },
  });
  const parsedText = new DOMParser().parseFromString(pureText, 'text/html')
    .documentElement.textContent;

  return (
    <Styled.AsideCard3>
      <li>
        <Styled.AsideCard3_UserInfoDiv>
          <div>
            <img src={post.image} alt="프로필 이미지" />
          </div>
          <div>
            <span>{post.writer}</span>
          </div>
        </Styled.AsideCard3_UserInfoDiv>
        <div>
          <span>{splitDate}</span>
        </div>
      </li>
      <li>
        <h4>{post.title}</h4>
      </li>
      <li>
        <p>{parsedText}</p>
      </li>
    </Styled.AsideCard3>
  );
};

export default RelationCard;
