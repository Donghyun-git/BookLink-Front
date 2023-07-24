//import React from 'react'
import { data } from '../../../../constants/sidoguInfo';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
import TopicInputForm from '../../../Common/Input/TopicInputForm';
import CityDistrictSelectorForm from '../../../Common/CityDistrictSelector/CityDistrictSelectorForm';
const BookClubsDetailForm = () => {
  const cities = Object.keys(data);
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
  });
  const onSubmit = async (data) => {
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
  };

  const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };
  return (
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
        <TopicInputForm {...register('title')} />
        {errors.title && <p>{errors.title.message}</p>}
        <WebEditorForm onContentsHandler={onContentsHandler} />
      </div>
      <button type="submit">게시글 등록하기</button>
    </form>
  );
};

export default BookClubsDetailForm;
