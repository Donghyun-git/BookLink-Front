import { useReducer } from 'react';
import {
  mapReducer,
  initialState,
} from '../../../context/MapContext/mapReducer';
import { mapContext } from '../../../context/MapContext/mapContext';
import MapContainer from './MapContainer';
import * as Styled from './Styled';

const MapMain = () => {
  const [state, dispatch] = useReducer(mapReducer, initialState);
  return (
    <Styled.MapMain>
      <mapContext.Provider value={{ state, dispatch }}>
        <MapContainer />
      </mapContext.Provider>
    </Styled.MapMain>
  );
};

export default MapMain;
