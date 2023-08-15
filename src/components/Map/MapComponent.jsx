import { useState, useEffect, useCallback, Fragment } from 'react';
import { useMapContext } from '../../context/MapContext/mapContext';
import { getLibraries } from '../../lib/apis/booksService';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { calculateHaversineDistance } from '../../utils/calculateHaversine';
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
        dispatch({
          type: 'MAP/ERROR',
          payload: '책이 있는 근처 도서관이 없어요.',
        });
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
        id: library.LBRRY_CD,
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

    const uniqueIds = new Set();
    const uniqueFilteredDistance10 = filteredDistance10.filter((obj) => {
      if (!uniqueIds.has(obj.id)) {
        uniqueIds.add(obj.id);
        return true;
      }
      return false;
    });

    dispatch({ type: 'MAP/MARKERS', payload: uniqueFilteredDistance10 });
  }, [currentLocation, dispatch, librariesData]);

  return (
    <Map
      center={isMove ? moveLocation : currentLocation}
      level={isMove ? 3 : 10}
      style={{
        width: '72.42857rem',
        height: '41.28571rem',
      }}
      onCenterChanged={() => dispatch({ type: 'MAP/MAP' })}
    >
      {markers &&
        markers.length > 0 &&
        markers.map((library) => {
          return (
            <Fragment key={library.id}>
              <MapMarker
                position={{ lat: library.lat, lng: library.lng }}
                onClick={() => handleShowMarkerInfo(library.name)}
                image={{
                  src: 'https://soccerquick.s3.ap-northeast-2.amazonaws.com/locationIcon.png',
                  size: {
                    width: 30,
                    height: 38,
                  },
                  options: {
                    offset: {
                      x: 27,
                      y: 69,
                    },
                  },
                }}
              ></MapMarker>
              {library.showMarkerInfo && (
                <>
                  <CustomOverlayMap
                    position={{
                      lat: library.lat,
                      lng: library.lng,
                    }}
                    xAnchor={0.6}
                    yAnchor={3.5}
                  >
                    <Styled.CustomOverlay>
                      <span>{library.name}</span>
                    </Styled.CustomOverlay>
                  </CustomOverlayMap>
                </>
              )}
            </Fragment>
          );
        })}
    </Map>
  );
};

export default MapComponent;
