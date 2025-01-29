import React from 'react';

const NoNotification = () => {
    return (
        <div className="flex flex-col items-center gap-[20px]">
              <img
                src="/src/assets/bell-svgrepo-com.svg"
                alt=""
                className="w-[70px] h-[70px]"
              />
              <h1>Мэдэгдэл хоосон байна</h1>
            </div>
    );
}

export default NoNotification;
