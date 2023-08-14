import DaumPostcode from 'react-daum-postcode';

const style = {
  display: 'block',
  position: 'fixed',
  top: '160px',
  left: '360px',
  width: '50%',
  background: 'rgba(0, 0, 0, 0.25)',
  zIndex: '100',
};
const AddressSearchForm = ({ onAddressClick }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    onAddressClick(fullAddress);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleSearch = (data) => {
    console.log(data);
  };
  return (
    <DaumPostcode
      className="postmodal"
      onComplete={handleComplete}
      onSearch={handleSearch}
      autoClose={false}
      style={style}
      //{...props}
    />
  );
};

export default AddressSearchForm;
