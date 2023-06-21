import Step1 from "./Step1";
import Step2 from "./Step2";
import { useState, createContext } from "react";
export const RegisterContext = createContext(null);
function Register() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    nickname: "",
    birth: "",
    card: "",
    address: "",
  });
  return (
    <RegisterContext.Provider value={{ step, setStep, user, setUser }}>
      {step == 1 && <Step1 />}
      {step === 2 && <Step2 />}
    </RegisterContext.Provider>
  );
}

export default Register;
