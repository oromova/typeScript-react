import React from "react";
import { useForm } from "react-hook-form";
import { IFormData } from "../types/userTypes";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormData>();

  const navigate = useNavigate();

  const onSubmit = (data: IFormData) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res?.accessToken);
        localStorage.setItem("user", res);
        navigate("/dashboard");
      });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="border" {...register("username")} />
        <input type="text" className="border" {...register("password")} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
