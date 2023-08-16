import * as Styled from './Styled';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CommunitiesDetailContext } from '../../../context/communitiesDetailContext';
import threePointUrl from '../../../images/threePoints.png';
import locationUrl from '../../../images/location.png';
import BookInfoForm from '../../UI/BookInfo/BookInfoForm';
import {
  bookClubsDelete,
  freesDelete,
  bookReportsDelete,
} from '../../../lib/apis/communities/delete/communitiesDeleteService';

const CommunitiesDetailForm = () => {
  const { info } = useContext(CommunitiesDetailContext);
  const {
    writer,
    image,
    title,
    content,
    category,
    updated,
    date,
    view_cnt,
    reply_cnt,
    like_cnt,
    location,
    bookInfo,
  } = info;
  console.log(info);
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
    <>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Sub>
        <Styled.SubLeft>
          <Styled.WriterImg>
            <img src={image} />
          </Styled.WriterImg>
          <Styled.SubDetail>
            <Styled.SubDetailTop>
              <Styled.Writer>{writer}</Styled.Writer>
              <Styled.Category>{category}</Styled.Category>
              {updated && <Styled.Updated>수정됨</Styled.Updated>}
            </Styled.SubDetailTop>
            <Styled.SubDetailBottom>
              <Styled.Date>{date}</Styled.Date>
              <Styled.View>조회수{view_cnt}</Styled.View>
              <Styled.Like>좋아요{like_cnt}</Styled.Like>
              <Styled.Reply>댓글{reply_cnt}</Styled.Reply>
            </Styled.SubDetailBottom>
          </Styled.SubDetail>
        </Styled.SubLeft>
        <Styled.SubRight>
          <div>
            <Styled.Button onClick={onModify}>수정</Styled.Button>
            <Styled.Button onClick={onDelete}>삭제하기</Styled.Button>
          </div>
          {/*<div>
              <Styled.Button>신고하기</Styled.Button>
             </div>*/}
          <img src={threePointUrl} />
        </Styled.SubRight>
      </Styled.Sub>
      <div>
        {bookInfo && (
          <BookInfoForm
            cover={bookInfo.cover}
            book_title={bookInfo.book_title}
            authors={bookInfo.authors}
            publisher={bookInfo.publisher}
            pud_date={bookInfo.pud_date}
          />
        )}
        {location && (
          <Styled.Location>
            <img src={locationUrl} />
            <span>{location}</span>
          </Styled.Location>
        )}
        <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export default CommunitiesDetailForm;
