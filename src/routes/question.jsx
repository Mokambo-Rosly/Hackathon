import { Button, Accordion  } from "flowbite-react";
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
        Questions Relatives aux Exoplanètes
        </h1>
        <div className="w-full flex items-center justify-center h-scren">
          <div className="container mx-6 sm:mx-8 md:mx-8 lg:mx-0">
            <div className="w-full rounded-xl bg-gradient-to-b p-[5px] from-purple-800 to-fuchsia-500">
              <div className="xl:flex">
              
                <section
                  className="border-l-[1px]
                border-slate-500 p-4 space-y-3 w-full rounded-bl-lg rounded-br-lg xl:rounded-bl-none xl:rounded-tr-lg bg-black bg-opacity-80"
                >
                  <div className="place-self-center">
                  
                 


                <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title>
                    Qu'est-ce qu'une exoplanète habitable ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Une exoplanète habitable est une planète située en dehors de notre système solaire qui présente des conditions favorables à la vie telle que nous la connaissons, notamment la présence d'eau liquide à la surface et une atmosphère appropriée.
                        </p>
                    </p>
                   
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Quelles sont les caractéristiques clés d'une exoplanète habitable ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Les caractéristiques clés incluent la zone habitable autour de son étoile, une atmosphère stable, la présence d'eau liquide et des conditions de température permettant la vie.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Comment les scientifiques déterminent-ils si une exoplanète est habitable ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Les scientifiques utilisent des télescopes et des missions spatiales pour détecter des exoplanètes potentiellement habitables et étudier leurs caractéristiques, telles que la composition atmosphérique et la distance par rapport à leur étoile hôte.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Quel rôle joue l'étoile hôte dans l'habitabilité d'une exoplanète ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        L'étoile hôte influence la température et les conditions atmosphériques de l'exoplanète. Une étoile stable et de type approprié est essentielle à l'habitabilité.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Comment l'atmosphère d'une exoplanète influence-t-elle son habitabilité ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        L'atmosphère régule la température et la pression à la surface de l'exoplanète. Une atmosphère adaptée permet le maintien de l'eau liquide et des conditions favorables à la vie.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Quelles sont les méthodes de détection des exoplanètes habitables ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Les méthodes incluent la méthode de transit, la méthode de vitesse radiale et l'imagerie directe, permettant d'observer les signes d'exoplanètes habitables.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Y a-t-il des exoplanètes habitables connues à ce jour ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Oui, il existe des exoplanètes potentiellement habitables, telles que Proxima Centauri b et Kepler-442b, bien que leur habitabilité nécessite encore des études approfondies.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Comment se compare une exoplanète habitable à la Terre ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Une exoplanète habitable présente des similitudes avec la Terre en termes de conditions nécessaires à la vie, mais chaque planète est unique.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Quels sont les défis potentiels pour la colonisation d'une exoplanète habitable ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Les défis incluent les voyages interstellaires, la durée du voyage, la création d'habitats viables et la gestion des ressources.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Quelles sont les dernières découvertes et recherches en cours sur les exoplanètes habitables ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Les recherches portent sur l'identification de nouvelles exoplanètes habitables, l'étude de leurs atmosphères et la recherche de signes de vie potentielle.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                  Qu'es ce que c'est que La sonde TESS
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        La sonde TESS, ou Transiting Exoplanet Survey Satellite, est un satellite de recherche spatial de la NASA conçu pour détecter des exoplanètes, c'est-à-dire des planètes situées en dehors de notre système solaire, en utilisant la méthode du transit. Cette méthode consiste à observer la diminution temporaire de la luminosité d'une étoile lorsque l'une de ses planètes passe devant elle, de notre point de vue sur Terre.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title>
                    Une exoplanète habitable peut-elle être classée comme une planète de type terrestre ?
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>
                        Oui, une exoplanète habitable peut être classée comme une planète terrestre. En astronomie, une planète terrestre est généralement définie comme une planète rocheuse qui partage des caractéristiques similaires à celles de la Terre. Ces caractéristiques comprennent la présence de surfaces solides, telles que des continents et des océans, ainsi qu'une atmosphère qui peut contenir de l'oxygène et de l'azote, des éléments essentiels à la vie telle que nous la connaissons.
                        </p>
                    </p>
                    
                    </Accordion.Content>
                </Accordion.Panel>

                </Accordion>
 



                   
                    
                    
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
