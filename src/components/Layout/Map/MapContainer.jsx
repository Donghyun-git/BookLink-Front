import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useMapContext } from '../../../context/MapContext/mapContext';
import { generateUniqueKey } from '../../../utils/generateUnique';
import * as Styled from './Styled';
import BookCard from '../../Map/BookCard';
import LibraryList from '../../Map/LibraryList';
import MapComponent from '../../Map/MapComponent';

const MapContainer = () => {
  const location = useLocation();
  const isbn13 = location.state.isbn13;

  const { state } = useMapContext();
  const { markers, isLoading } = state;

  return (
    <Styled.MapContainer>
      <div>
        <h2>대여 정보</h2>
      </div>
      <Styled.InfoSection>
        {/* <div>
          <BookCard />
        </div> */}

        <Styled.MapSection>
          <Styled.MapCategory>
            <div>
              <ul>
                <li>
                  {isLoading ? (
                    <></>
                  ) : (
                    <>
                      <h3>검색결과</h3>
                      <span>{markers.length}개</span>
                    </>
                  )}
                </li>
                {isLoading ? (
                  <li>로딩중</li>
                ) : (
                  markers.map((library) => {
                    return (
                      <Fragment key={generateUniqueKey()}>
                        <LibraryList info={library} />
                      </Fragment>
                    );
                  })
                )}
              </ul>
            </div>
          </Styled.MapCategory>
          <MapComponent isbn13={isbn13} />
        </Styled.MapSection>
      </Styled.InfoSection>
    </Styled.MapContainer>
  );
};

export default MapContainer;
