import { axiosJsonInstance } from '../config/axios';

export const getChatRooms = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(`/chat/rooms`);
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const getChatRoom = async (room_id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/chat/room/${room_id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const postChatRoom = async (book_id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.post(
      `/chat/room/${book_id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
