import { useForm } from "react-hook-form";
//import { yupResolver } from "@hookform/resolvers/yup";
//import * as yup from "yup";
import { useContext } from "react";
import { RegisterContext } from "../";
function Step2() {
  const { register, handleSubmit } = useForm();
  const { step, setStep, user, setUser } = useContext(RegisterContext);
  const onSubmit = (data) => {
    console.log(user);
    setUser({ ...user, ...data });
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} />
      <input type="text" {...register("gender")} />
      <input type="text" {...register("nickname")} />
      <input type="text" {...register("birth")} />
      <input type="text" {...register("card")} />
      <input type="text" {...register("address")} />
      <input type="text" {...register("agree")} />
      <button
        type="button"
        onClick={() => {
          setStep(step - 1);
        }}
      >
        이전단계
      </button>
      <button type="sumbit">가입완료</button>
    </form>
  );
}

export default Step2;
