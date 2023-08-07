import { axiosJsonInstance, axiosFormInstance } from '../config/axios';

export const myInfo = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/mypage/account`
    );
    const { data: data } = data1;
    console.log(data);

    return { data, status };
  } catch (error) {
    console.log(error.response);
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

export const myInfoModify = async (data) => {
  const { image, updateInfo } = data;
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(updateInfo)], {
    type: 'application/json',
  });
  formData.append('image', image[0]);
  formData.append('updateInfo', blob);

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
