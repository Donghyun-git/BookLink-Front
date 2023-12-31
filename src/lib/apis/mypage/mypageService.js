import { axiosJsonInstance, axiosFormInstance } from '../common';

export const myInfo = async () => {
  try {
    const { data: data1 } = await axiosJsonInstance.get(`/mypage/account`);
    const { data: data } = data1;

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const myInfoAuth = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.post(
      `/mypage/account`
    );
    const { data: data } = data1;
    console.log(data);

    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const myInfoModify = async (data1) => {
  console.log(data1);
  const { image, ...data } = data1;
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });
  formData.append('image', image);
  formData.append('data', blob);
  console.log(image);
  console.log(blob);
  try {
    const { data, status } = await axiosFormInstance.patch(
      `/mypage/account`,
      formData
    );

    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
