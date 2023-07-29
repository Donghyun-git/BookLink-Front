import * as Styled from './Styled';
import { dateFormat } from '../../../../utils/date';
import { useNavigate } from 'react-router-dom';
import locationUrl from '../../../../images/location.png';
import replyUrl from '../../../../images/comment.png';
import threePointUrl from '../../../../images/threePoints.png';
const BookClubsCardForm = ({
  date,
  location,
  reply_cnt,
  writer,
  title,
  content,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Styled.BookClubsCardDiv
      onClick={() => {
        navigate(`/communities/book-clubs/${id}`);
      }}
    >
      <Styled.BookClubsCardContainerDiv>
        <Styled.BookClubsCardHeaderDiv>
          <Styled.LocationDiv>
            <Styled.LocationImg src={locationUrl} />
            <div>{location}</div>
          </Styled.LocationDiv>
          <Styled.replyDiv>
            <Styled.replyImg src={replyUrl} />
            <div>{reply_cnt}</div>
            <Styled.PointsImg src={threePointUrl} />
          </Styled.replyDiv>
        </Styled.BookClubsCardHeaderDiv>
        <Styled.BookClubsCardInfoDiv>
          <Styled.BookClubsCardInfoWriterDiv>
            {writer}
          </Styled.BookClubsCardInfoWriterDiv>
          <Styled.BookClubsCardInfoCategoryDiv>
            독서모임
          </Styled.BookClubsCardInfoCategoryDiv>
          <Styled.BookClubsCardInfoDateDiv>
            {dateFormat(date)}
          </Styled.BookClubsCardInfoDateDiv>
        </Styled.BookClubsCardInfoDiv>
        <Styled.BookClubsCardTitleDiv>{title}</Styled.BookClubsCardTitleDiv>
        <Styled.BookClubsCardContentDiv
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Styled.BookClubsCardContainerDiv>
    </Styled.BookClubsCardDiv>
  );
};

export default BookClubsCardForm;
