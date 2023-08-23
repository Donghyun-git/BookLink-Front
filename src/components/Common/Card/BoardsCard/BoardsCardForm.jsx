import * as Styled from './Styled';
import { useNavigate } from 'react-router-dom';
import { dateFormat } from '../../../../utils/date';
import { useState } from 'react';
import heartUrl from '../../../../images/grayheart.png';
import replyUrl from '../../../../images/comment.png';
import threePointUrl from '../../../../images/threePoints.png';
import bookReportUrl from '../../../../images/bookReport.png';
const BoardsCardForm = ({
  category,
  reply_cnt,
  like_cnt,
  writer,
  date,
  title,
  content,
  id,
}) => {
  const navigate = useNavigate();
  //const [threePointClick,setThreePointClick]=useState(false);

  return (
    <Styled.BoardsCardDiv
      key={date}
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
          <Styled.BoardsCardHeaderLeft>
            {category === '독후감' && (
              <Styled.bookReportImg src={bookReportUrl} />
            )}
            <Styled.BoardsCardHeaderLeftImg src={heartUrl} />
            <div>{like_cnt}</div>
            <Styled.BoardsCardHeaderLeftImg src={replyUrl} />
            <div>{reply_cnt}</div>
          </Styled.BoardsCardHeaderLeft>
          <Styled.BoardsCardHeaderRight>
            <img
              src={threePointUrl}
              onClick={() => {
                setThreePointClick((state) => !state);
              }}
            />
          </Styled.BoardsCardHeaderRight>
        </Styled.BoardsCardHeaderDiv>
        <Styled.BoardsCardInfoDiv>
          <Styled.BoardsCardInfoWriterDiv>
            {writer}
          </Styled.BoardsCardInfoWriterDiv>
          <Styled.BoardsCardInfoCategoryDiv>
            {category}
          </Styled.BoardsCardInfoCategoryDiv>
          <Styled.BoardsCardInfoDateDiv>
            {dateFormat(date)}
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
