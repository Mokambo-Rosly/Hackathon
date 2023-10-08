import { Button } from "flowbite-react";
import { IoIosPlanet } from "react-icons/io";
import { GrSolaris } from "react-icons/gr";
export default function About() {
  return (
    <main className="w-full flex  items-center h-screen">
      <div className="md:m-auto w-[70em]">
        <h1
          className="text-white glow lettering uppercase font-light px-2 mb-8 text-center w-full 
        text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-4xl mt-44 sm:mt-40 md:mt-24 lg:mt-24"
        >
         Explorez une Réalité Virtuelle Étonnante
        </h1>
        <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">Le mot de passe de la présentation est : 6Zw7vwCmrr</p>
        <div className="twinmotion-embed-wrapper mt-5">
                <iframe
                style={{
                    height: '100%',
                    width: '100%',
                    minHeight: '375px',
                    minWidth: '375px',
                }}
                title="Embedded presentation 'LYSGAN, une exoplanète similaire à la terre'"
                frameBorder="0"
                allow="fullscreen; gyroscope; accelerometer; magnetometer; execution-while-out-of-viewport; execution-while-not-rendered; xr-spatial-tracking;"
                allowFullScreen
                mozAllowFullScreen={true}
                webkitAllowFullScreen={true}
                src="https://twinmotion.unrealengine.com/presentation/15jjmiHSh-xMIjj4?embed"
                ></iframe>
            </div>
        </div>
    </main>
  );
}
