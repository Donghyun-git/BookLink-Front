import * as Styled from './Styled';
import { dateFormat } from '../../../../utils/date';
import { useNavigate } from 'react-router-dom';
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
          <p>{location}</p>
          <p>{reply_cnt}</p>
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
