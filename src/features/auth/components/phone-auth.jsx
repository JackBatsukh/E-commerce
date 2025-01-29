import React from 'react';

const PhoneAuth = () => {
    return (
        <div className="w-full flex justify-center">
          <div className="phone-number w-[300px]  flex flex-col items-center gap-[2px]">
            <h1 className="w-full">Утасны дугаар</h1>
            <input
              type="text"
              placeholder=""
              className="w-[300px] h-[30px] border-[1px] rounded-lg px-[10px] bg-white"
            />
          </div>
        </div>
    );
}

export default PhoneAuth;
