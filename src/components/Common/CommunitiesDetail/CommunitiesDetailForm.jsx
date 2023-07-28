import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import {
  bookClubsDelete,
  freesDelete,
  bookReportsDelete,
} from '../../../lib/apis/communities/delete/communitiesDeleteService';
const Title = styled.div`
  margin-top: 7.286rem;
  width: 100%;
  font-size: 3.428rem;
  font-weight: bold;
`;
const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.571rem;
  height: 5rem;
  border-bottom: 0.071rem solid #d9d9d9;
`;
const SubLeft = styled.div`
  height: 3.428rem;
  width: 27.786rem;
`;
const SubRight = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.571rem;
`;

const Button = styled.div`
  height:1.286rem
  width:3.214rem
  font-size:0.857rem;
  border: 0.071rem solid #d9d9d9;
  text-align:center;  
`;
const BookInfo = styled.div`
  margin-top: 2.571rem;
  height: 11.286rem;
  border: 1px solid black;
  border-radius: 0.571rem;
  display: flex;
`;
const BookImg = styled.img`
  width: 9.571rem;
  height: 9.571rem;
  margin: 0.857rem;
`;
const BookDetail = styled.div`
  height: 9.571rem;
  border: 1px solid black;
  margin: 0.857rem;
`;
const Location = styled.div`
  margin-top: 2.571rem;
  font-size: 1.714rem;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 2.571rem;
  min-height: 40.071rem;
  border-bottom: 0.071rem solid #d9d9d9;
`;
const CommunitiesDetailForm = ({
  title,
  writer,
  category,
  date,
  view_cnt,
  reply_cnt,
  like_cnt,
  content,
  bookInfo,
  location,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onDelete = async () => {
    if (category === '자유글') {
      const { status } = await freesDelete(id);
      console.log(status);
    } else if (category === '독후감') {
      const { status } = await bookReportsDelete(id);
      console.log(status);
    } else {
      const { status } = await bookClubsDelete(id);
      console.log(status);
    }
  };
  const onModify = () => {
    if (category === '자유글') {
      navigate(`/communities/boards/free-report/modify/${id}`, {
        state: { title, content },
      });
    } else if (category === '독후감') {
      navigate(`/communities/boards/book-report/modify/${id}`, {
        state: {
          title,
          content,
          bookInfo,
        },
      });
    } else {
      navigate(`/communities/book-clubs/modify/${id}`, {
        state: { title, location, content },
      });
    }
  };
  return (
    <div>
      <Title>{title}</Title>
      <Sub>
        <SubLeft>
          <div>
            <span>{writer}</span>
            <span>{category}</span>
          </div>
          <div>
            <span>{date}</span>
            <span>조회수{view_cnt}</span>
            <span>좋아요{like_cnt}</span>
            <span>댓글{reply_cnt}</span>
          </div>
        </SubLeft>
        <SubRight>
          <div>
            <Button onClick={onModify}>수정</Button>
            <Button onClick={onDelete}>삭제하기</Button>
          </div>
          <div>
            <Button>신고하기</Button>
          </div>
        </SubRight>
      </Sub>
      <div>
        {bookInfo && (
          <BookInfo>
            <BookImg src={''} />
            <BookDetail>
              <p>{bookInfo.book_title}</p>
              <p>{bookInfo.authors}</p>
              <p>{bookInfo.publisher}</p>
              <p>{bookInfo.pud_date}</p>
            </BookDetail>
          </BookInfo>
        )}
        {location && <Location>{location}</Location>}
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default CommunitiesDetailForm;
