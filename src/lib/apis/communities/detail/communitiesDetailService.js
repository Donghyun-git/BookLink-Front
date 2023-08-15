import { axiosJsonInstance } from '../../config/axios';
import { dateFormat } from '../../../../utils/date';
export const bookClubsDetail = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/book-club/${id}`
    );
    const { data } = data1;
    data.category = '독서 모임';
    data.date = dateFormat(data.date);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const freesDetail = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/board/free/${id}`
    );
    const { data } = data1;
    data.date = dateFormat(data.date);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const bookReportsDetail = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/board/report/${id}`
    );
    console.log(data1);
    let { data } = data1;
    const {
      date,
      cover,
      book_title,
      authors,
      publisher,
      pud_date,
      isbn,
      ...data2
    } = data;
    data2.date = dateFormat(date);
    data2.bookInfo = { cover, book_title, authors, publisher, pud_date, isbn };
    data = data2;
    return data;
  } catch (error) {
    console.log(error);
  }
};
