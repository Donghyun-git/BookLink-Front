import * as Styled from './Styled';
import { useNavigate } from 'react-router-dom';
import { dateFormat } from '../../../../utils/date';
const BoardsCardForm = ({ lastModifiedTime, title, content, id }) => {
  const navigate = useNavigate();
  return (
    <Styled.BoardsCardDiv
      key={lastModifiedTime}
      onClick={() => {
        console.log(1);
        navigate(`/communities/boards/free-report/${id}`);
      }}
    >
      <Styled.BoardsCardContainerDiv>
        <Styled.BoardsCardHeaderDiv>
          <p>0</p>
          <p>0</p>
        </Styled.BoardsCardHeaderDiv>
        <Styled.BoardsCardInfoDiv>
          <Styled.BoardsCardInfoWriterDiv>
            작성자명
          </Styled.BoardsCardInfoWriterDiv>
          <Styled.BoardsCardInfoCategoryDiv>
            게시글
          </Styled.BoardsCardInfoCategoryDiv>
          <Styled.BoardsCardInfoDateDiv>
            {dateFormat(lastModifiedTime)}
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
