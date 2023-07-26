//import { data } from '../../../../constants/sidoguInfo';
import { useState, useEffect } from 'react';
//import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
//import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import { bookClubsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
//import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
//import TopicInputForm from '../../../Common/Input/TopicInputForm';
//import CityDistrictSelectorForm from '../../../Common/CityDistrictSelector/CityDistrictSelectorForm';
import { dateFormat } from '../../../../utils/date';
import { useNavigate, useParams } from 'react-router-dom';
const BookClubsDetailForm = () => {
  /*const cities = Object.keys(data);
  const [cityActive, setCityActive] = useState(
    Array(cities.length).fill(false)
  );
  const [districts, setDistricts] = useState([]);
  const [districtActive, setDistrictActive] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(communitiesRegisterSchema),
    mode: 'onChange',
  });*/
  const [info, SetInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const getDetail = async () => {
    const { data } = await bookClubsDetail(Number(id));
    SetInfo(data);
  };
  /*const onSubmit = async (data) => {
    console.log(data);
  };
  const onCityHandler = (e) => {
    if (e.target.innerText) {
      setValue('city', e.target.innerText);
      setCityActive(
        cities.map((city) => (city === e.target.innerText ? true : false))
      );
      console.log(cityActive);
      setDistricts(data[e.target.innerText]);
      console.log(districts);
      setDistrictActive(new Array(data[e.target.innerText].length).fill(false));
    }
  };

  const onDistrictHandler = (e) => {
    if (e.target.innerText) {
      setValue('district', e.target.innerText);
      setDistrictActive(
        districts.map((district) =>
          district === e.target.innerText ? true : false
        )
      );
    }
  };*/
  useEffect(() => {
    getDetail();
  }, []);
  const {
    writer,
    writer_image,
    title,
    content,
    location,
    date,
    reply_cnt,
    view_cnt,
    like_cnt,
    liked,
    replies,
  } = info;
  /*const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };*/
  return (
    <>
      <p>{title}</p>
      <p>독서 모임 모집</p>
      <img src={writer_image} />
      <p>{writer}</p>
      <p>{dateFormat(date)}</p>
      <p>{like_cnt}</p>
      <p>{view_cnt}</p>
      <p>{reply_cnt}</p>
      <button
        type="button"
        onClick={() => {
          navigate(`/communities/book-clubs/modify/${id}`);
        }}
      >
        수정하기
      </button>
      <button type="button" onClick={() => {}}>
        삭제
      </button>
      <p>{location}</p>
      <button type="button">1:1채팅하기</button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
    /*<form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <CityDistrictSelectorForm
          cities={cities}
          onCityHandler={onCityHandler}
          cityActive={cityActive}
          districts={districts}
          onDistrictHandler={onDistrictHandler}
          districtActive={districtActive}
        />
        <TopicInputForm register={register} />
        {errors.title && <p>{errors.title.message}</p>}
        <WebEditorForm onContentsHandler={onContentsHandler} />
      </div>
      <button type="submit">게시글 등록하기</button>
    </form>*/
  );
};

export default BookClubsDetailForm;
