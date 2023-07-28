import * as Styled from './Styled';
import { useNavigate } from 'react-router-dom';
import { dateFormat } from '../../../../utils/date';
const BoardsCardForm = ({
  category,
  reply_cnt,
  like_cnt,
  writer,
  localDateTime,
  title,
  content,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Styled.BoardsCardDiv
      key={localDateTime}
      onClick={() => {
        if (category === '자유글') {
          navigate(`/communities/boards/free-report/${id}`);
        } else {
          navigate(`/communities/boards/book-report/${id}`);
        }
      }}
    >
      <Styled.BoardsCardContainerDiv>
        <Styled.BoardsCardHeaderDiv>
          <p>{like_cnt}</p>
          <p>{reply_cnt}</p>
        </Styled.BoardsCardHeaderDiv>
        <Styled.BoardsCardInfoDiv>
          <Styled.BoardsCardInfoWriterDiv>
            {writer}
          </Styled.BoardsCardInfoWriterDiv>
          <Styled.BoardsCardInfoCategoryDiv>
            {category}
          </Styled.BoardsCardInfoCategoryDiv>
          <Styled.BoardsCardInfoDateDiv>
            {dateFormat(localDateTime)}
          </Styled.BoardsCardInfoDateDiv>
        </Styled.BoardsCardInfoDiv>
        <Styled.BoardsCardTitleDiv>{title}</Styled.BoardsCardTitleDiv>
        <Styled.BoardsCardContentDiv>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Styled.BoardsCardContentDiv>
      </Styled.BoardsCardContainerDiv>
    </Styled.BoardsCardDiv>
  );
};

export default BoardsCardForm;
