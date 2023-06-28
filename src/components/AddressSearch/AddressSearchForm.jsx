import DaumPostcode from 'react-daum-postcode';
const AddressSearchForm = ({ onAddressClick }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    // console.log(data);
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    onAddressClick(fullAddress);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleSearch = (data) => {
    console.log(data);
  };
  return (
    <DaumPostcode
      onComplete={handleComplete}
      onSearch={handleSearch}
      autoClose={false}
      //{...props}
    />
  );
};

export default AddressSearchForm;
