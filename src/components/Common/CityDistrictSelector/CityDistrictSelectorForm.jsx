import styled from 'styled-components';
import { data } from '../../../constants/sidoguInfo';
import { useState } from 'react';
const Tag = styled.div`
  margin-top: 2.571rem;
  margin-bottom: 0.571rem;
  font-size: 1.714rem;
  font-weight: bold;
`;
const CityContainerDiv = styled.div`
  display: flex;
  height: 13.857rem;
`;
const CitiesDiv = styled.div`
  width: 10.714rem;
  border: 1px solid black;
  overflow: auto;
`;
const CityDiv = styled.div`
  text-align: center;
  font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')};
`;

const DistrictiesDiv = styled.div`
  width: 92.143rem;
  overflow: auto;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const DistrictDiv = styled.div`
  text-align: center;
  font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')};
  width: 8.143rem;
  height: 1.714rem;
`;

const CityDistrictSelectorForm = ({ city = '', district = '', setValue }) => {
  const cities = Object.keys(data);
  const [cityActive, setCityActive] = useState(
    cities.map((city1) => city1 === city)
  );
  const [districts, setDistricts] = useState(city ? data[city] : []);
  const [districtActive, setDistrictActive] = useState(
    city && data[city]
      ? data[city].map((district1) => district1 === district)
      : []
  );
  const onCityHandler = (e) => {
    if (e.target.innerText) {
      setValue('city', e.target.innerText);
      setCityActive(cities.map((city) => city === e.target.innerText));
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

  return (
    <div>
      <Tag>모임위치</Tag>
      <CityContainerDiv>
        <CitiesDiv>
          {cities.map((city, idx) => {
            return (
              <CityDiv
                key={city}
                onClick={onCityHandler}
                active={cityActive[idx].toString()}
              >
                <span>{city}</span>
              </CityDiv>
            );
          })}
        </CitiesDiv>
        <DistrictiesDiv>
          {districts.map((district, idx) => {
            return (
              <DistrictDiv
                key={district}
                onClick={onDistrictHandler}
                active={districtActive.length && districtActive[idx].toString()}
              >
                <span>{district}</span>
              </DistrictDiv>
            );
          })}
        </DistrictiesDiv>
      </CityContainerDiv>
    </div>
  );
};

export default CityDistrictSelectorForm;
