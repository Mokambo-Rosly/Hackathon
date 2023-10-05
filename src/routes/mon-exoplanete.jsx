import { Link } from "react-router-dom";
import AppData from "../data/app.data";
import { BiPlanet } from "react-icons/bi";
import { IoMdRocket } from "react-icons/io";
import { GrSolaris } from "react-icons/gr";
import { useState } from "react";
import { Button } from "flowbite-react";
import "../data/types"
export default function PlanetPage() {
  /* todo: add infinite scrolling here */
  const itemsPerPage = 300;
  //const [count, setCount] = useState(0);
  const [planets, setPlanets] = useState(AppData.exoplanets.slice(0, itemsPerPage));
  window.scrollTo({ top: 0, behavior: "smooth" });
  //
  return (
    <main className="w-full flex justify-center items-center">
      <section className="m-auto mt-14">
        <h1
          className="text-white glow lettering uppercase font-light px-2 mb-8 mt-8 text-center w-full 
        text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
        >
          LysGan
        </h1>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-wrap">
          <div className="min-w-[285px] flex flex-col h-full w-full lg:w-[30em] rounded-lg overflow-hidden bg-gradient-to-b p-0.5 from-cyan-500 to-green-500">
      <img
        className="lg:h-80 md:h-60 w-full object-cover object-center rounded-tl-lg rounded-tr-lg "
        src="../../static/ospel.jpeg"
        alt="blog"
      />
      <div className="p-6  bg-black rounded-bl-lg rounded-br-lg flex-auto justify-items-stretch">
        <h1 className="text-slate-100 lettering font-extralight text-2xl md:text-3xl lg:text-4xl w-full">
         LYSGAN
        </h1>
        <h3 className="tracking-widest font-medium text-sky-500 mb-1 text-lg md:text-xl w-full">
        Une exoplanète habitable semblable à la Terre
        </h3>
        <h2 className="leading-relaxed mb-4 text-slate-400 italic text-sm md:text-md lg:text-lg w-full justify-self-stretch h-max">
        LysGan est une exoplanète habitable qui orbite autour de son étoile hôte, LysGan, une étoile de type solaire. Avec une masse équivalente à 1,2 fois celle de la Terre, LysGan accomplit une orbite complète autour de LysGan en 365 jours et se trouve à une distance de 0,95 unité astronomique (UA) de son étoile. Sa découverte a été annoncée en 2023. <br/>
        <a  href={"/#/recit"} className="text-sky-500 text-lg md:text-xl w-full">Pour en savoir plus sur LysGan et son histoire passionnante, cliquez ici :</a>
        </h2>
        <div className="flex items-center justify-between">
          <Button
            href={"/#/planets/LysGan"}
            outline={true}
            gradientDuoTone="cyanToBlue"
            size="lg"
          >
            <IoMdRocket className="text-xl group-hover:bounce_y transition-all" />
            <span className="sm:text-xs md:text-md lg:text-lg group">Visiter la planète</span>
          </Button>
          <Button
            href={"/#/stars/Yap's"}
            outline={true}
            gradientDuoTone="pinkToOrange"
            size="lg"
          >
            <GrSolaris className="text-xl group-hover:bounce_y transition-all" />
            <span className="sm:text-xs md:text-md lg:text-lg">Visiter son étoile</span>
          </Button>
        </div>
      </div>
    </div>
          </div>
        </div>
       
      </section>
    </main>
  );
}

