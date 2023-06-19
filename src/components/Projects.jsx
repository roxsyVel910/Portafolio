import React, { useState } from "react";

import img2 from "../assets/images/datalovers.png";
import img3 from "../assets/images/shopi.png";
import img4 from "../assets/images/spotify.png";
import img5 from "../assets/images/doggos.png";
import img6 from "../assets/images/targeta.png";
import img7 from "../assets/images/sheldon.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Duckling Shoes - E-commers",
      description: "E-commerce - API Fake",
      img: img3,
    },

    {
      id: 3,
      title: "Sheldon´s Game",
      description: "Piedra, Papel, Tijera , Lagrato, Spock",
      img: img7,
    },
  ];
  const projectsjs = [
    {
      id: 1,
      title: "Data Lovers",
      description: "Single-page application",
      img: img2,
    },
    {
      id: 2,
      title: "Social Network",
      description: "App Social Dogs",
      img: img5,
    },
    {
      id: 3,
      title: "Card Validation",
      description: "Validacion de Tajeta con Algoritmo de Luhn",
      img: img6,
    },
  ];
  const projectsmq = [
    {
      id: 1,
      title: "Spotify´s Clon",
      description: "Maquetacion con html /css",
      img: img4,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Proyects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          ...
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#413A84,#413A84)]" : ""
            }`}
          >
            React
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#413A84,#38097a)]" : ""
            }  `}
          >
            JavaScript
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#413A84,#38097a)]" : ""
            }`}
          >
            Web layout
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 2
            ? projectsjs.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 3
            ? projectsmq.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Projects;
