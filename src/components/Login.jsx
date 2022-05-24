import React from "react";
import styled from "styled-components";

const Log = styled.div`
  width: 60%;
  height: 300px;

  margin: auto;
  margin-top: 10px;
  input {
    margin-top: 20px;
    padding: 10px;
  }
  button {
    margin-top: 20px;
    padding: 10px;
  }
`;
export const Login = () => {
  return (
    <Log>
      <h1>Login </h1>
      Email <input type="text" placeholder="Enter your Email" /> <br />
      Passsword <input type="text" placeholder="Enter Your Password" /> <br />
      <button>Login </button>
    </Log>
  );
};
