import React from "react";
import { useForm } from "react-hook-form";
import { IFormData } from "../types/userTypes";
import { useNavigate } from "react-router-dom";
import { login } from "../Api/authLogin";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: IFormData) => {
    try {
      const response = await login(data.username, data.password);
      localStorage.setItem("token", response.accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="border" {...register("username")} />
        <input
          type="text"
          className="border"
          {...register("password", {
            required: "Parol kiritish majburiy",
            minLength: {
              value: 8,
              message: "Parol kamida 6ta belgi bo'lishi kerak",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
