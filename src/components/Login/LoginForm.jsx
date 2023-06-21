// eslint-disable-next-line no-unused-vars
import { useState, useRef, Fragment } from "react";

const LoginForm = () => {
  return (
    <Fragment>
      <form>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" placeholder="example@gmail.com" />
        <label htmlFor="password">패스워드</label>
        <input
          type="password"
          id="password"
          placeholder="8~16자로 입력해주세요."
        />
      </form>
    </Fragment>
  );
};

export default LoginForm;
