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
        LysGan : Le Paradis Caché de l'Espace
        </h1>
        <div className="w-full flex items-center justify-center h-scren">
          <div className="container mx-6 sm:mx-8 md:mx-8 lg:mx-0">
            <div className="w-full rounded-xl bg-gradient-to-b p-[5px] from-purple-800 to-fuchsia-500">
              <div className="xl:flex">
                <figure className="bg-slate-600 w-full relative overflow-hidden rounded-tl-xl lg:rounded-bl-none rounded-tr-lg xl:rounded-tr-none xl:rounded-bl-lg">
                  <img
                    className="w-full h-full object-bottom"
                    src="https://media.discordapp.net/attachments/1124002659112845345/1160542564160639076/Night.png?ex=65350a7d&is=6522957d&hm=bc6c2fc3dfaf491fea28dfb9ec4e122fe68aa54c518a67879cd3633a3e7d7bbb&=&width=751&height=422"
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
                    Il était une fois une exoplanète lointaine nommée LysGan. Elle tournait autour d'une étoile similaire à notre Soleil, créant un environnement paradisiaque. LysGan était un peu plus grande que la Terre, mais ressemblait beaucoup à notre planète, la rendant propice à la vie.
                    </p>
                    <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">
                    Sur LysGan, l'air était respirable avec beaucoup d'oxygène et d'azote. Les océans couvraient environ 70 % de sa surface, tandis que des terres fertiles et des forêts luxuriantes s'étendaient sur les continents.
                    </p>
                    <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">
                    La diversité de la vie sur LysGan était incroyable, avec des jungles colorées, des créatures marines fascinantes et une variété d'animaux terrestres. Ce qui la distinguait vraiment, c'étaient les LysGaniens, des êtres intelligents vivant en harmonie avec leur monde.
                    </p>
                    <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">
                    Les LysGaniens avaient développé une technologie respectueuse de l'environnement, une agriculture durable et une société basée sur le partage et la préservation de leur planète. Ils avaient réussi à communiquer avec d'autres espèces et à préserver l'équilibre naturel de LysGan.
                    </p>
                    <p className="w-full px-1 font-light md:text-lg lg:text-lg text-slate-300 mt-4 drop-shadow-md">
                    LysGan était un modèle d'abondance et de durabilité, où chacun vivait en harmonie avec la nature pour assurer un avenir meilleur.
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
