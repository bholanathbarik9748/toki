"use client";
import React, { useState } from "react";

// import Handler
import { globalFormHandler } from "@/utils/formHandler/formHandler";

// import interfaces / type
import { LoginFormErrorInterface, LoginFormInputInterface } from "./interfaces";

// import Validation
import { isLoginFormValid } from "./validation";

const Login = () => {
  const [formData, setFormData] = useState<LoginFormInputInterface>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormErrorInterface>({
    email: false,
    password: false,
  });

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    const isValid: boolean = isLoginFormValid(formData, setErrors);
    if (isValid) {
      return;
    }

    console.log("formData", formData);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login to your account
          </h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  globalFormHandler(e.target.id, e.target.value, setFormData);
                  setErrors((prev) => ({ ...prev, email: false }));
                }}
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:border-indigo-500"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {"Please enter valid email"}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => {
                  globalFormHandler(e.target.id, e.target.value, setFormData);
                  setErrors((prev) => ({ ...prev, password: false }));
                }}
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:outline-none ${
                  errors.password ? "border-red-500" : "focus:border-indigo-500"
                }`}
                placeholder="********"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {"Please enter valid password"}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>

              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 text-sm"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {"Don't have an account? "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
