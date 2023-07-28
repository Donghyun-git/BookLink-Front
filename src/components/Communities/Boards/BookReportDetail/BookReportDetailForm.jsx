import { useState, useEffect } from 'react';
import { bookReportsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
import { dateFormat } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
import { MainContainerDiv } from '../../../../styles/globalStyled';
import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
const BookReportDetailForm = () => {
  const [info, SetInfo] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const { data } = await bookReportsDetail(Number(id));
    console.log(data);
    SetInfo(data);
  };
  useEffect(() => {
    getDetail();
  }, []);
  const {
    title,
    writer,
    category,
    localDateTime,
    view_cnt,
    reply_cnt,
    like_cnt,
    cover,
    book_title,
    authors,
    publisher,
    pud_date,
    content,
  } = info;

  return (
    <MainContainerDiv>
      <CommunitiesDetailForm
        title={title}
        writer={writer}
        category={category}
        date={dateFormat(localDateTime)}
        view_cnt={view_cnt}
        reply_cnt={reply_cnt}
        like_cnt={like_cnt}
        content={content}
        bookInfo={{ cover, book_title, authors, publisher, pud_date }}
      />
    </MainContainerDiv>
  );
};

export default BookReportDetailForm;
