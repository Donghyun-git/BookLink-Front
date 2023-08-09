import { useState, useEffect, useCallback } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as Styled from './Styled';

const MapComponent = () => {
  const { geolocation } = navigator;
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });
  // const [showMarkerInfo, setShowMarkerInfo] = useState(null);  매개변수로 마커 고유값 전달 해서 비교연산자로 조건부렌더링
  const [showMarkerInfo, setShowMarkerInfo] = useState(false);

  const handleShowMarkerInfo = useCallback(() => {
    setShowMarkerInfo(!showMarkerInfo);
  }, [showMarkerInfo]);

  useEffect(() => {
    geolocation.getCurrentPosition((locate) => {
      const { latitude, longitude } = locate.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
    });
  }, [geolocation]);

  return (
    <Map
      center={currentLocation}
      style={{
        width: '63.42857rem',
        height: '40.28571rem',
      }}
    >
      <MapMarker position={currentLocation} onClick={handleShowMarkerInfo}>
        {showMarkerInfo && <Styled.MarkerDiv>Hello World!</Styled.MarkerDiv>}
      </MapMarker>
      <MapMarker position={currentLocation} onClick={handleShowMarkerInfo}>
        {showMarkerInfo && <Styled.MarkerDiv>Hello World!</Styled.MarkerDiv>}
      </MapMarker>
    </Map>
  );
};

export default MapComponent;
