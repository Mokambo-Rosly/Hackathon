import { Button } from "flowbite-react";
import { IoIosPlanet } from "react-icons/io";
import { GrSolaris } from "react-icons/gr";
export default function About() {
  return (
    <main className="w-full flex justify-center items-center h-screen">
      <div className="md:m-auto">
        <h1
          className="text-white glow lettering uppercase font-light px-2 mb-8 text-center w-full 
        text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-4xl mt-44 sm:mt-40 md:mt-24 lg:mt-24"
        >
        Une Journée dans la Vie des LysGaniens
        </h1>
        <div className="w-full flex items-center justify-center h-scren">
          <div className="container mx-6 sm:mx-8 md:mx-8 lg:mx-0">
            <div className="w-full rounded-xl bg-gradient-to-b p-[5px] from-purple-800 to-fuchsia-500">
              <div className="xl:flex">
              <figure className="bg-slate-600 w-full relative overflow-hidden rounded-tl-xl lg:rounded-bl-none rounded-tr-lg xl:rounded-tr-none xl:rounded-bl-lg">
                  <img
                    className="w-full h-full object-bottom"
                    src="../../static/Day.png"
                  />
                  <footer className="py-3 px-3 bg-slate-800 text-xs text-white font-mono absolute bottom-0 right-0 left-0 rounded-bl-lg bg-opacity-80 border-t-[1px] border-slate-900">
                    <aside>Illustration</aside>
                  </footer>
                </figure>
                <section
                  className="border-l-[1px]
                border-slate-500 p-4 space-y-3 w-full rounded-bl-lg rounded-br-lg xl:rounded-bl-none xl:rounded-tr-lg bg-black bg-opacity-80"
                >
                  <div className="place-self-center">
                  
                    <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">
                    Bienvenue à LysGan, un monde d'abondance. Préparez-vous à passer une journée aux côtés des LysGaniens pour découvrir leur vie en harmonie avec la nature.
                    </p>
                    <h2 className="w-full lettering tracking-tight leading-none text-cyan-200 text-xl sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl mt-4 ml-1">Matinée : </h2>
                    
                    <ul className="list-disc ml-6 mt-2 text-white">
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">Vous débutez la journée dans une maison LysGanienne au cœur de la luxuriante forêt. Le chant des oiseaux et le murmure de la rivière vous réveillent doucement. Ces maisons en bois local sont entourées de jardins verdoyants.</p>
                      </li>
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">Après un petit déjeuner de fruits frais, céréales et boissons naturelles, partez en balade matinale. Observez les créatures colorées et exotiques évoluant parmi les arbres.</p>
                      </li>
                    </ul>

                    <h2 className="w-full lettering tracking-tight leading-none text-cyan-200 text-xl sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl mt-4 ml-1">Après-midi :</h2>
                    
                    <ul className="list-disc ml-6 mt-2 text-white">
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">L'après-midi, assistez à un atelier d'art animé par des artistes LysGaniens talentueux. Vous pouvez créer votre propre œuvre d'art avec des éléments naturels tels que feuilles, pétales et pierres précieuses.</p>
                      </li>
                    </ul>

                    <h2 className="w-full lettering tracking-tight leading-none text-cyan-200 text-xl sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl mt-4 ml-1">Soirée :</h2>
                    
                    <ul className="list-disc ml-6 mt-2 text-white">
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">La soirée vous réserve un festin communautaire sous les étoiles, autour d'un feu de camp. Des plats délicieux sont servis, agrémentés d'histoires et de musique jouée sur des instruments locaux.</p>
                      </li>
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">Avant de rejoindre votre chambre pour la nuit, contemplez le ciel étoilé et la lune paisible. Vous vous endormez en parfaite harmonie avec la nature.</p>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
