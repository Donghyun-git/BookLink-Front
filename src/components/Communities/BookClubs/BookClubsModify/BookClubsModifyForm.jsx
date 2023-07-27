import { useState } from 'react';
import TopicContentForm from '../../../Common/TopicContent/TopicContentForm';
import CityDistrictSelectorForm from '../../../Common/CityDistrictSelector/CityDistrictSelectorForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { data } from '../../../../constants/sidoguInfo';
import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import { bookClubsModify } from '../../../../lib/apis/communities/modify/communitiesModify';
import { useNavigate, useParams } from 'react-router-dom';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../../styles/globalStyled';
const BookClubsModifyForm = () => {
  const cities = Object.keys(data);
  const [cityActive, setCityActive] = useState(
    Array(cities.length).fill(false)
  );
  const [districts, setDistricts] = useState([]);
  const [districtActive, setDistrictActive] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(communitiesRegisterSchema),
    mode: 'onChange',
  });
  const onSubmit = async (data) => {
    const { title, content } = data;
    const data1 = await bookClubsModify(title, content, id);
    console.log(data1);
    navigate(`/communities/book-clubs/${id}`);
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
  };
  const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };
  return (
    <MainContainerDiv>
      <MainContentsDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <CityDistrictSelectorForm
              cities={cities}
              onCityHandler={onCityHandler}
              cityActive={cityActive}
              districts={districts}
              onDistrictHandler={onDistrictHandler}
              districtActive={districtActive}
            />
            <TopicContentForm
              register={register}
              onContentsHandler={onContentsHandler}
            />
          </div>
          <button type="submit">수정하기</button>
        </form>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookClubsModifyForm;
