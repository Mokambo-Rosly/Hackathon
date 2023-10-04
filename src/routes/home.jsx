import { Button } from "flowbite-react";
import { IoIosPlanet } from "react-icons/io";
import { GrSolaris } from "react-icons/gr";
import Quote from "../components/quote";
export default function Home() {
  return (
    <main className="w-full flex justify-center items-center h-screen">
      <div className="md:m-auto">
      <h1
          className="text-white glow lettering uppercase font-light px-2 mb-8 text-center w-full 
        text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl mt-44 sm:mt-40 md:mt-24 lg:mt-24"
        >
          BIENVENUE DANS EXOPLANÈTES
        </h1>
        <div className="w-full flex items-center justify-center h-scren">
          <div className="container mx-6 sm:mx-8 md:mx-8 lg:mx-0">
            <div className="w-full rounded-xl bg-gradient-to-b p-[5px] from-cyan-300 to-slate-700">
              <div className="xl:flex">
                <figure className="bg-slate-600 w-full relative overflow-hidden rounded-tl-xl lg:rounded-bl-none rounded-tr-lg xl:rounded-tr-none xl:rounded-bl-lg">
                  <img
                    className="w-full h-full object-bottom"
                    src="https://i.ibb.co/LzMHj1x/tess-min.png"
                  />
                  <footer className="py-3 px-3 bg-slate-800 text-xs text-white font-mono absolute bottom-0 right-0 left-0 rounded-bl-lg bg-opacity-80 border-t-[1px] border-slate-900">
                    <aside>Image: Sonde TESS</aside>
                  </footer>
                </figure>
                <section
                  className="border-l-[1px]
                border-slate-500 p-4 space-y-3 w-full rounded-bl-lg rounded-br-lg xl:rounded-bl-none xl:rounded-tr-lg bg-black bg-opacity-80"
                >
                  <div className="place-self-center">
                    <h1 className="w-full lettering mb-4 tracking-tight leading-none text-cyan-200 text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
                      🧑‍🚀SALUTATIONS, HABITANTS DE L'ESPACE !
                    </h1>
                    <div className="px-4 lg:px-8 xl:px-12">
                    <Quote/>
                    </div>
                    <p className="w-full p-2 lg:p-6 font-light md:text-lg lg:text-lg text-slate-300 mt-4">
                    Cette plateforme présente les  227 planètes confirmées par le satellite d'enquête {" "}
                      <a className="text-purple-500 hover:text-white" href="https://en.wikipedia.org/wiki/Transiting_Exoplanet_Survey_Satellite"> TESS, </a> offrant ainsi au monde la possibilité de les explorer et de s'informer sur l'univers. 
                      <br />
                      <br />
                      Les données ont été extraites du{" "}
                      <a
                        href="https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PS&constraint=default_flag=1&constraint=disc_facility+like+%27%25TESS%25%27"
                        className="text-cyan-300 hover:text-white"
                      >
                        site Web Exoplanet Archive de la NASA
                      </a>
                      . Des données supplémentaires de {" "}
                      <a
                        href="https://api.nasa.gov/"
                        className="text-red-500 hover:text-white"
                      >
                        l'Open API de la NASA
                      </a>{" "}
                      ont été utilisées. 
                    </p>
                    <div className="grid items-center md:grid-cols-2 grid-cols-1 justify-items-stretch md:justify-items-center fluid-button-bar gap-4 my-8 mx-4 sm:mx-1 lg:mx-10">
                      <Button
                        href="/#/stars/"
                        outline={true}
                        gradientDuoTone="pinkToOrange"
                        size="xl"
                      >
                        <GrSolaris className="text-xl group-hover:animate-spin transition-all" size={30}/>
                        <span className="sm:text-md md:text-md lg:text-lg">Les étoiles</span>
                      </Button>
                      <Button
                        href="/#/planets/"
                        outline={true}
                        gradientDuoTone="cyanToBlue"
                        size="xl"
                      >
                        <IoIosPlanet className="text-xl group-hover:animate-spin3d transition-all" size={28}/>
                        <span className="sm:text-md md:text-md lg:text-lg">Les planètes</span>
                      </Button>
                    </div>
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
