import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookClubRegisterSchema } from '../../../validators/communityValidator';
import { bookClubRegister } from '../../../apis/communitiesService';
const BookClubsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookClubRegisterSchema),
    mode: 'onChange',
  });
  const onSubmit = async (data) => {
    console.log(data);
    const { title, location, content } = data;
    const data1 = await bookClubRegister(title, content, location);
    console.log(data1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="제목" {...register('title')} />
      {errors.title && <p>{errors.title.message}</p>}
      <input type="text" placeholder="위치" {...register('location')} />
      {errors.location && <p>{errors.location.message}</p>}
      <textarea rows="10" cols="10" {...register('content')}></textarea>
      {errors.content && <p>{errors.content.message}</p>}
      <button type="submit">등록</button>
    </form>
  );
};

export default BookClubsForm;
