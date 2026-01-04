import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="flex flex-row p-10 space-x-6 justify-center">
      <div className="mynav size-15 place-items-center text-cyan-500">
        <img
          src="https://img.icons8.com/3d-fluency/94/user-credentials.png"
          alt="User Credentials"
          className="w-full h-full object-cover "
        />
        Login
      </div>
      <div className="mynav size-15 ">
        <img
          src="https://img.icons8.com/matisse/100/home.png"
          alt="Home"
          className="w-full h-full object-cover place-items-center "
        />
        Home
      </div>
      <div className="mynav size-15 place-items-center text-pink-500">
        <img
          src="https://img.icons8.com/keek/100/romantic-places.png"
          alt="Romantic Places"
          className="w-full h-full object-cover "
        />
        Places
      </div>
      <div className="mynav  size-15 ">
        <img
          src="https://img.icons8.com/keek/100/chat.png"
          alt="Chat"
          className="w-full h-full object-cover "
        />
        Chat
      </div>
      <div className="mynav  size-15 place-items-center ">
        <img
          src="https://img.icons8.com/fluency/48/control-panel.png"
          alt="Control Panel"
          className="w-full h-full object-cover"
        />
        DashBoard
      </div>
      <div className="mynav  size-15 ">
        <img
          src="https://img.icons8.com/pin/100/exit.png"
          alt="Exit"
          className="w-full h-full object-cover "
        />
        LogOut
      </div>
    </div>
  );
};

export default NavBar;
