import React from 'react';

const PasswordAuth = () => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="phone-number w-[300px]  flex flex-col items-center gap-[2px]">
                    <h1 className="w-full">Нууц үг</h1>
                    <input
                        type="password"
                        placeholder=""
                        className="w-[300px] h-[30px] border-[1px] rounded-lg px-[10px] bg-white"
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default PasswordAuth;
