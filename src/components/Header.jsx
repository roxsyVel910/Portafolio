import React from "react";
import logo from "../assets/images/astrow.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bansky.png";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <h1 className="text-white text-5xl font-bold">Hola, Soy Roxsana</h1>
            <p className="text-white py-4 max-w-lg ">
              Desarrolladora Web especializado en desarrollo front end con
              experiencia en todas las etapas del ciclo de desarrollo de
              proyectos web.
            </p>
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                ⬇ Download CV
              </button>
            </div>
            <button className="  text-white text-2xl">
              Contactame{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </button>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[500px] flex "></div>
          <div className="image banner-astronout1 lg:hidden absolute w-[500px] flex "></div>
        </div>
      </div>
    </>
  );
}

export default Header;
