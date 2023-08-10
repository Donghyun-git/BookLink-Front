import { useCallback } from 'react';
import { useMapContext } from '../../context/MapContext/mapContext';
import * as Styled from './Styled';

const LibraryList = ({ info }) => {
  const { name, distance, address, lat, lng, type, open, tel, showListInfo } =
    info;
  const { dispatch } = useMapContext();

  const handleMoveMap = useCallback(() => {
    dispatch({ type: 'MAP/MOVE', payload: { lat, lng } });
    dispatch({ type: 'MAP/SHOW_LIST_INFO', payload: name });
  }, [dispatch, lat, lng, name]);

  return (
    <>
      <Styled.LibraryList
        onClick={() => handleMoveMap()}
        style={
          showListInfo
            ? {
                borderBottom: '2px solid #000',
                backgroundColor: '#f0f0f0',
              }
            : null
        }
      >
        <div>
          <h4>{name}</h4>
          <span>{distance}km</span>
        </div>
        {showListInfo && (
          <div>
            <p>
              유형:<span>{type}도서관</span>
            </p>
            <p>
              주소:<span>{address}</span>
            </p>
            <p>
              영업시간 <br />
              <span>{open}</span>
            </p>
            <p>
              연락처:<span>{tel}</span>
            </p>
          </div>
        )}
      </Styled.LibraryList>
    </>
  );
};

export default LibraryList;
