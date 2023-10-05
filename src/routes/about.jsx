import { Button } from "flowbite-react";
import { IoIosPlanet } from "react-icons/io";
import { GrSolaris } from "react-icons/gr";
export default function About() {
  return (
    <main className="w-full flex justify-center items-center h-screen">
      <div className="md:m-auto">
        <h1
          className="text-white glow lettering uppercase font-light px-2 mb-8 text-center w-full 
        text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl mt-44 sm:mt-40 md:mt-24 lg:mt-24"
        >
          LysGan : Une expérience à la croisée de la science, de l'art et de l'imagination.
        </h1>
        <div className="w-full flex items-center justify-center h-scren">
          <div className="container mx-6 sm:mx-8 md:mx-8 lg:mx-0">
            <div className="w-full rounded-xl bg-gradient-to-b p-[5px] from-purple-800 to-fuchsia-500">
              <div className="xl:flex">
                <figure className="bg-slate-600 w-full relative overflow-hidden rounded-tl-xl lg:rounded-bl-none rounded-tr-lg xl:rounded-tr-none xl:rounded-bl-lg">
                  <img
                    className="w-full h-full object-bottom"
                    src="../../static/Mokambo.jpg"

                    // https://exoplanets.nasa.gov/system/feature_items/images/465_HD260655b_1600x900.jpg
                  />
                  <footer className="py-3 px-3 bg-slate-800 text-xs text-white font-mono absolute bottom-0 right-0 left-0 rounded-bl-lg bg-opacity-80 border-t-[1px] border-slate-900">
                    <aside>Rosly MOKAMBO</aside>
                  </footer>
                </figure>
                <section
                  className="border-l-[1px]
                border-slate-500 p-4 space-y-3 w-full rounded-bl-lg rounded-br-lg xl:rounded-bl-none xl:rounded-tr-lg bg-black bg-opacity-80"
                >
                  <div className="place-self-center">
                    <h1 className="w-full lettering mb-4 tracking-tight leading-none text-cyan-200 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
                      Salut 👋,
                    </h1>
                    <p className="w-full px-1 font-light md:text-lg lg:text-xl text-slate-300 mt-4 drop-shadow-md">
                    Bienvenue sur L'Exoplanète Habitée - LysGan, une aventure créative au-delà des étoiles ! Notre projet est né de l'inspiration et de la passion pour l'exploration, la science, et l'imagination débordante.
                    </p>
                   
                    <h2 className="w-full lettering tracking-tight leading-none text-cyan-200 text-xl sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl mt-4 ml-1">Ce Que Nous Offrons</h2>
                    
                    <ul className="list-disc ml-6 mt-2 text-white">
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md"> Une immersion totale dans le monde extraordinaire de LysGan, avec des récits captivants, des illustrations éblouissantes, des simulations interactives et bien plus encore.</p>
                      </li>
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md"> Une expérience éducative qui combine la science, la technologie, l'art et la narration pour susciter la réflexion et la découverte.</p>
                      </li>
                      <li>
                        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md"> Une invitation à rêver, à créer et à explorer, en stimulant l'imagination de chacun et en encourageant la réflexion sur l'importance de la préservation de notre propre planète.</p>
                      </li>
                     
                     
                    </ul>
                    <h2 className="w-full lettering tracking-tight leading-none text-cyan-200 text-xl sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl mt-4 ml-1">Rejoignez-Nous :</h2>
                    <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">
                    Nous vous invitons à embarquer avec nous pour ce voyage au-delà des frontières de l'imagination. Explorez LysGan, plongez dans ses mystères, et découvrez un monde où la vie prospère en harmonie avec la nature. <br/>
                    
                    </p>
                    <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">
                    Suivez notre projet, participez à notre communauté, et soyez inspiré par la beauté infinie de la création. Ensemble, créons un monde meilleur, même s'il n'existe que dans notre imagination.
                    </p>
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
