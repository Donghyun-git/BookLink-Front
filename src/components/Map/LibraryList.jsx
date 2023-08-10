import { useCallback } from 'react';
import { useMapContext } from '../../context/MapContext/mapContext';
import * as Styled from './Styled';

const LibraryList = ({ info }) => {
  const { name, distance, address, lat, lng } = info;
  const { dispatch } = useMapContext();

  const handleMoveMap = useCallback(() => {
    dispatch({ type: 'MAP/MOVE', payload: { lat, lng } });
  }, [dispatch, lat, lng]);

  return (
    <>
      <Styled.LibraryList onClick={() => handleMoveMap()}>
        <div>
          <h4>{name}</h4>
          <span>{distance}km</span>
        </div>
        <div>
          <p>{address}</p>
        </div>
      </Styled.LibraryList>
    </>
  );
};

export default LibraryList;
