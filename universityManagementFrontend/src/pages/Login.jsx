import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../providers/AuthProvider";

const Login = () => {
  const { login } = useAuth();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const notifySuccess = () => {
      toast.success("Login Success", {
        position: "top-center",
        duration: 3000,
      });
    };

    const notifyError = () => {
      toast.error("Wrong username or password", {
        id: "errorLogin",
        position: "top-center",
        duration: 2000,
        style: { background: "#f44336", color: "#ffffff" },
        iconTheme: {
          primary: "#ffffff",
          secondary: "#f44336",
        },
      });
    };

    try {
      await login(data.username, data.password);
      navigate("/");
      setTimeout(() => {
        notifySuccess();
      }, 500);
    } catch (err) {
      notifyError();
      console.log(err);
    }
  };

  return (
    <div className="mt-4 border-8 mx-10 my-10 border-double md:w-3/6 md:mx-auto md:my-10 border-[#1363DF] rounded-xl ">
      <h1 className="p-2 text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white border-b-2 border-[#1363DF] md:p-4">
        Sign in
      </h1>
      <Toaster />
      <form
        className="space-y-4 md:space-y-6 w-full p-6 md:mx-auto md:w-5/6"
        onSubmit={handleSubmit}
      >
        <div className="mt-2 md:mt-3 w-full">
          <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            type="text"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            required=""
          />
        </div>
        <div className="mt-2 md:mt-3 w-full">
          <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            className="mb-4 md:mb-5 bg-[#1363DF] hover:bg-[#DFF6FF] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logged in..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
