import { useState, useEffect } from 'react';
import { bookReportsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
import { dateFormat } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
import {
  MainContainerDiv,
  CommunitiesDetailContentsDiv,
} from '../../../../styles/globalStyled';
import LikeShareForm from '../../../Common/LikeShare/LikeShareForm';
import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
import CommunitiesCommentForm from '../../../Common/CommunitiesComment/CommunitiesCommentForm';
import { CommunitiesDetailContext } from '../../../../context/communitiesDetailContext';
const BookReportDetailForm = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const { data } = await bookReportsDetail(Number(id));
    console.log(data);
    const { date, cover, book_title, authors, publisher, pud_date, ...data1 } =
      data;

    setInfo({
      ...data1,
      date: dateFormat(date),
      bookInfo: { cover, book_title, authors, publisher, pud_date },
    });
  };
  useEffect(() => {
    getDetail();
  }, []);
  /*const {
    writer,
    title,
    content,
    category,
    date,
    view_cnt,
    reply_cnt,
    like_cnt,
    liked,
    bookInfo,
    replies,
  } = info;*/

  return (
    <MainContainerDiv>
      <CommunitiesDetailContext.Provider value={{ info, setInfo }}>
        <LikeShareForm />
        <CommunitiesDetailContentsDiv>
          <CommunitiesDetailForm />
          <CommunitiesCommentForm />
        </CommunitiesDetailContentsDiv>
      </CommunitiesDetailContext.Provider>
    </MainContainerDiv>
  );
};

export default BookReportDetailForm;
