import { useForm } from "react-hook-form";
//import { yupResolver } from "@hookform/resolvers/yup";
//import * as yup from "yup";
import { useContext } from "react";
import { RegisterContext } from "../";
function Step1() {
  const { register, handleSubmit } = useForm();
  const { step, setStep, user, setUser } = useContext(RegisterContext);
  const onSubmit = (data) => {
    setUser({ ...user, ...data });
    console.log(user);
    setStep(step + 1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="이메일을 입력해주세요" {...register("email")} />
      <input type="password" {...register("password")} />
      <input type="password" {...register("checkpw")} />
      <button type="sumbit">다음</button>
    </form>
  );
}

export default Step1;
