import React from 'react';
import Sidebar from './sidebar/sidebar';

const Layout = ({children}) => {
    return (
      <div className="w-[100%] h-screen flex flex-row">
        <nav>
          <Sidebar />
        </nav>
        <main className="w-[100%] h-[100%] bg-[#f6f6f6]">{children}</main>
      </div>
    );
}

export default Layout;
