import styled from 'styled-components';

const CityContainerDiv = styled.div`
  display: flex;
  height: 13.857rem;
`;
const CitiesDiv = styled.div`
  width: 10.714rem;
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

const CityDistrictSelectorForm = ({
  cities,
  onCityHandler,
  cityActive,
  districts,
  onDistrictHandler,
  districtActive,
}) => {
  return (
    <div>
      <h2>모임위치</h2>
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
