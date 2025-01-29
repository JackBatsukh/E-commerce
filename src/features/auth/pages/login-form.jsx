import React from "react";
import PhoneAuth from "../components/phone-auth";
import PasswordAuth from "../components/password-auth";
import FacebookAuth from "../components/facebook-auth";
import GoogleAuth from "../components/google-auth";
import BackButton from "../../../shared/components/back-button";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-[#f6f6f6]">
      <div className="w-full px-[10px] py-[20px] lg:px-[40px]">
        <BackButton />
      </div>
      <form action="">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[400px] h-[500px] bg-[#fff] rounded-3xl flex flex-col justify-center gap-[20px]">
            <h1 className="text-[20px] text-center font-normal ">Нэвтрэх</h1>
            <PhoneAuth />
            <div className="w-full flex flex-col items-center gap-[2px]">
              <PasswordAuth />
              <a className="w-[300px] flex justify-end">Нууц үг мартсан</a>
            </div>
            <div className="w-full flex flex-col items-center  ">
              <Link to={"/"}>
                <button className="w-[300px] h-[40px] bg-[#000] text-[#fff] rounded-xl">
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="text-[#000]/70 w-[300px] text-[14px] flex justify-center border-b-[1px] py-[15px]">
                  Шинэ хэрэглэгчээр бүртгүүлэх
                </button>
              </Link>
            </div>
            <FacebookAuth />
            <GoogleAuth />
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default LoginForm;
