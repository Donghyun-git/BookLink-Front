import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState /*useEffect*/ } from 'react';
import * as Styled from './Styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../validators/communityValidator';
import { useNavigate } from 'react-router-dom';
import {
  freeRegister,
  bookClubRegister,
  reportRegister,
} from '../../../lib/apis/communitiesService';
import { communitiesBookSearch } from '../../../lib/apis/searchService';
import { data } from '../../../constants/sidoguInfo';

const CommunitiesRegisterForm = () => {
  const navigate = useNavigate();
  const [bookReportClick, setBookReportClick] = useState(false);
  const [bookClubsReportClick, setBookClubsReportClick] = useState(false);

  const cities = Object.keys(data);
  const [cityActive, setCityActive] = useState(
    Array(cities.length).fill(false)
  );
  const [districts, setDistricts] = useState([]);
  const [districtActive, setDistrictActive] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(communitiesRegisterSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
    const {
      title,
      content,
      city,
      district,
      book_title,
      authors,
      publisher,
      pud_date,
    } = data;
    if (bookClubsReportClick) {
      const location = city + ' ' + district;
      console.log(location);
      const data1 = await bookClubRegister(title, content, location);
      console.log(data1);
      navigate('/communities/book-clubs');
    } else if (bookReportClick) {
      const data1 = await reportRegister(
        title,
        content,
        book_title,
        authors,
        publisher,
        pud_date
      );
      console.log(data1);
      navigate('/communities/boards');
    } else {
      const data1 = await freeRegister(title, content);
      console.log(data1);
      navigate('/communities/boards');
    }
  };

  const onSelectHandler = (e) => {
    console.log(e.target.checked);
    if (e.target.value == 'bookReport') {
      setBookReportClick(true);
      setBookClubsReportClick(false);
    } else if (e.target.value == 'bookClubsReport') {
      setBookClubsReportClick(true);
      setBookReportClick(false);
    } else {
      setBookReportClick(false);
      setBookClubsReportClick(false);
    }
  };
  const onBookInfoHandler = async (e) => {
    console.log(e.target.value);
    const { item } = await communitiesBookSearch(e.target.value);
    if (item) {
      const { title, author, pubDate, publisher } = item[0];
      console.log(item[0]);
      setValue('book_title', title);
      setValue('authors', author);
      setValue('publisher', publisher);
      setValue('pud_date', pubDate);
    }
  };
  const onCityHandler = (e) => {
    if (e.target.innerText) {
      setValue('city', e.target.innerText);
      setCityActive(
        cities.map((city) => (city === e.target.innerText ? true : false))
      );
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
  /*useEffect(() => {
    setDistrictActive(new Array(districts.length).fill(false));
    console.log(districts);
    //console.log(districtActive);
  }, [districts]);*/

  const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <div>
          <Styled.SelectContainerDiv>
            <Styled.SelectDiv>
              <input
                type="radio"
                name="writing"
                value="freeReport"
                onChange={onSelectHandler}
              />
              <label htmlFor="freeReport">자유글 작성하기</label>
              <p>자유롭게 글을 작성해보세요</p>
            </Styled.SelectDiv>
          </Styled.SelectContainerDiv>
          <div>
            <Styled.SelectContainerDiv>
              <Styled.SelectDiv>
                <input
                  type="radio"
                  name="writing"
                  value="bookReport"
                  onChange={onSelectHandler}
                />
                <label htmlFor="bookReport">독후감 작성하기</label>
                <p>책에 대한 독후감을 작성하여 의견을 나눠보세요!</p>
              </Styled.SelectDiv>
            </Styled.SelectContainerDiv>
          </div>
          <div>
            <Styled.SelectContainerDiv>
              <Styled.SelectDiv>
                <input
                  type="radio"
                  name="writing"
                  value="bookClubsReport"
                  onChange={onSelectHandler}
                />
                <label htmlFor="bookClubsReport">
                  독서 모임 모집글 작성하기
                </label>
                <p>게시글을 통해 직접 독서 모임을 만들어보세요!</p>
              </Styled.SelectDiv>
            </Styled.SelectContainerDiv>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {bookReportClick && (
            <div>
              <Styled.BookContainerDiv>
                <h2>도서명</h2>
                <input
                  type="search"
                  placeholder="도서명 검색하세요"
                  onChange={onBookInfoHandler}
                />
              </Styled.BookContainerDiv>
              <div>
                <p>{getValues('book_title')}</p>
                <p>{getValues('authors')}</p>
                <p>{getValues('publisher')}</p>
                <p>{getValues('pud_date')}</p>
              </div>
            </div>
          )}
          {bookClubsReportClick && (
            <div>
              <h2>모임위치</h2>
              <Styled.cityContainerDiv>
                <Styled.citiesDiv>
                  {cities.map((city, idx) => {
                    return (
                      <Styled.cityDiv
                        key={city}
                        onClick={onCityHandler}
                        active={cityActive[idx].toString()}
                      >
                        <span>{city}</span>
                      </Styled.cityDiv>
                    );
                  })}
                </Styled.citiesDiv>
                <Styled.districtiesDiv>
                  {districts.map((district, idx) => {
                    return (
                      <Styled.districtDiv
                        key={district}
                        onClick={onDistrictHandler}
                        active={
                          districtActive.length &&
                          districtActive[idx].toString()
                        }
                      >
                        <span>{district}</span>
                      </Styled.districtDiv>
                    );
                  })}
                </Styled.districtiesDiv>
              </Styled.cityContainerDiv>
              {/*errors.location && <p>{errors.location.message}</p>*/}
            </div>
          )}
          <h2>제목</h2>
          <Styled.Title type="text" {...register('title')} />
          {errors.title && <p>{errors.title.message}</p>}
          <h2>내용</h2>
          <ReactQuill
            onChange={onContentsHandler}
            /*style={{ height: '10rem' }}*/
          />
          <Styled.ButtonDiv>
            <button type="submit">게시글 등록하기</button>
          </Styled.ButtonDiv>
        </form>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};
export default CommunitiesRegisterForm;
