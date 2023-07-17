import * as yup from 'yup';

export const communitiesRegisterSchema = yup.object().shape({
  title: yup.string().required('제목을 작성해주세요'),
  //location: yup.string().required('위치를 작성해주세요'),
  content: yup.string().required('내용을 작성해주세요'),
});
