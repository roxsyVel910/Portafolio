import React from "react";

function ProjectCard({ item }) {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-2xl">
        <img src={item.img} alt="" className="w-full" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#413A84] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
