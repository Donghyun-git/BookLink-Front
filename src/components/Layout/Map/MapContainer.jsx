import * as Styled from './Styled';
import BookCard from '../../Map/BookCard';
import LibraryList from '../../Map/LibraryList';
import MapComponent from '../../Map/MapComponent';

const MapContainer = () => {
  return (
    <Styled.MapContainer>
      <div>
        <h2>대여 정보</h2>
      </div>
      <Styled.InfoSection>
        <div>
          <BookCard />
        </div>
        <Styled.MapSection>
          <Styled.MapCategory>
            <div>
              <ul>
                <li>
                  <h3>검색결과</h3>
                  <span>21개</span>
                </li>
                <LibraryList />
                <LibraryList />
                <LibraryList />
                <LibraryList />
                <LibraryList />
                <LibraryList />
                <LibraryList />
              </ul>
            </div>
          </Styled.MapCategory>
          <MapComponent />
        </Styled.MapSection>
      </Styled.InfoSection>
    </Styled.MapContainer>
  );
};

export default MapContainer;
