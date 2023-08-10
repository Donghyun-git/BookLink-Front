import { useState, useEffect, useCallback, Fragment } from 'react';
import { useMapContext } from '../../context/MapContext/mapContext';
import { getLibraries } from '../../lib/apis/booksService';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { calculateHaversineDistance } from '../../utils/calculateHaversine';
import { generateUniqueKey } from '../../utils/generateUnique';
import * as Styled from './Styled';

const MapComponent = ({ isbn13 }) => {
  const { geolocation } = navigator;

  const [librariesData, setLibrariesData] = useState([]);

  const { state, dispatch } = useMapContext();

  const { markers, currentLocation, isMove, moveLocation } = state;

  const handleShowMarkerInfo = useCallback(
    (name) => {
      dispatch({ type: 'MAP/SHOW_MARKER_INFO', payload: name });
    },
    [dispatch]
  );

  useEffect(() => {
    geolocation.getCurrentPosition((locate) => {
      const { latitude, longitude } = locate.coords;
      dispatch({
        type: 'MAP/CURRENT',
        payload: { lat: latitude, lng: longitude },
      });
    });
  }, [dispatch, geolocation]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getLibraries(isbn13);

        setLibrariesData(data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch, isbn13]);

  useEffect(() => {
    const caculateDistance = librariesData.map((library) => {
      const libraryLocation = {
        lat: library.LBRRY_LA,
        lng: library.LBRRY_LO,
      };

      const distance = calculateHaversineDistance(
        currentLocation,
        libraryLocation
      );

      return {
        id: generateUniqueKey(),
        name: library.LBRRY_NM,
        address: library.LBRRY_ADDR,
        distance,
        type: library.LBRRY_TY_NM,
        open: library.OPNNG_TIME,
        tel: library.TEL_NO,
        lat: library.LBRRY_LA,
        lng: library.LBRRY_LO,
        showMarkerInfo: false,
        showListInfo: false,
      };
    });

    const sortedDistance = caculateDistance.sort(
      (a, b) => a.distance - b.distance
    );

    const filteredDistance10 = sortedDistance.filter((library) => {
      return library.distance < 11;
    });

    dispatch({ type: 'MAP/MARKERS', payload: filteredDistance10 });
  }, [currentLocation, dispatch, librariesData]);

  return (
    <Map
      center={isMove ? moveLocation : currentLocation}
      level={isMove ? 3 : 10}
      style={{
        width: '72.42857rem',
        height: '41.28571rem',
      }}
    >
      {markers &&
        markers.length > 0 &&
        markers.map((library) => {
          return (
            <Fragment key={library.id}>
              <MapMarker
                position={{ lat: library.lat, lng: library.lng }}
                onClick={() => handleShowMarkerInfo(library.name)}
              >
                {library.showMarkerInfo && (
                  <Styled.MarkerDiv>{library.name}</Styled.MarkerDiv>
                )}
              </MapMarker>
            </Fragment>
          );
        })}
    </Map>
  );
};

export default MapComponent;
