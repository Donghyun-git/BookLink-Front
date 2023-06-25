import axios from "axios";

export const emailDoubleCheck = async (email) => {
  const { data } = await axios.post("/email/double-check", email);
  return data;
};

export const nicknameDoubleCheck = async (nickname) => {
  const { data } = await axios.post("/nickname/double-check", nickname);
  return data;
};
