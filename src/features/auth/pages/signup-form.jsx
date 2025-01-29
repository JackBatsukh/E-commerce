import React from "react";
import BackButton from "../../../shared/components/back-button";
import NameAuth from "../components/name-auth";
import EmailAuth from "../components/email-auth";
import PhoneAuth from "../components/phone-auth";
import PasswordAuth from "../components/password-auth";
import PasswordCheck from "../components/password-check";
import { Link } from "react-router";

const SignupForm = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-[#f6f6f6]">
      <div className="w-full px-[10px] py-[20px] lg:px-[40px]">
        <BackButton />
      </div>
      <form action="">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[400px] h-fit bg-[#fff] rounded-3xl flex flex-col justify-center gap-[20px] py-[50px]">
            <h1 className="text-[20px] text-center font-normal ">
              Бүртгэл үүсгэх
            </h1>
            <NameAuth />
            <EmailAuth />
            <PhoneAuth />
            <PasswordAuth />
            <PasswordCheck />
            <div className="w-full flex flex-col items-center  ">
              <Link to={"/login"}>
                <button className="w-[300px] h-[40px] bg-[#000] text-[#fff] rounded-xl">
                  Бүртгүүлэх
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default SignupForm;
