import { Link } from "react-router-dom";
import AppData from "../data/app.data";
import { BiPlanet } from "react-icons/bi";
import { IoMdRocket } from "react-icons/io";
import { GrSolaris } from "react-icons/gr";
import { useState } from "react";
import { Button } from "flowbite-react";
import React, { useEffect } from 'react';
import "../data/types"

const questions = [
  {
    question: "Qu'est-ce qu'une exoplanète ?",
    options: [
      'Une planète située en dehors de notre système solaire.',
      "Une planète située à l'intérieur de notre système solaire.",
      'Une planète située sur Mars.',
      'Une planète située sur la Lune.',
    ],
    correctAnswer: 'Une planète située en dehors de notre système solaire.',
  },
  {
    question: 'Quelle méthode est principalement utilisée pour détecter les exoplanètes ?',
    options: [
      'La méthode des transits',
      "La méthode de l'effet de serre",
      'La méthode des étoiles filantes',
      'La méthode des sondes spatiales',
    ],
    correctAnswer: 'La méthode des transits',
  },
  {
    question: "Qu'est-ce que la zone habitable d'une étoile ?",
    options: [
      'La région où il fait très froid',
      'La région où il fait très chaud',
      'La région où les conditions sont propices à la vie',
      'La région où il y a beaucoup de comètes',
    ],
    correctAnswer: 'La région où les conditions sont propices à la vie',
  },
  {
    question: "Quelles sont les caractéristiques essentielles d'une exoplanète habitable ?",
    options: [
      'Une atmosphère épaisse de gaz toxiques',
      'Des températures extrêmement basses',
      "La présence d'eau liquide en surface, une atmosphère, une température modérée, une protection contre les radiations nocives",
      'Aucune des réponses ci-dessus',
    ],
    correctAnswer: "La présence d'eau liquide en surface, une atmosphère, une température modérée, une protection contre les radiations nocives",
  },
  {
    question: "Qu'est-ce que l'effet de serre sur une exoplanète habitable ?",
    options: [
      "Un phénomène qui refroidit l'atmosphère",
      'Un mécanisme qui empêche toute forme de vie',
      'Un mécanisme par lequel une atmosphère retient la chaleur',
      'Un phénomène qui provoque des tempêtes violentes',
    ],
    correctAnswer: 'Un mécanisme par lequel une atmosphère retient la chaleur',
  },
  {
    question: 'Quelle est la première exoplanète confirmée ?',
    options: [
      'Kepler-22b',
      '51 Pegasi b',
      'Proxima Centauri b',
      'HD 209458 b',
    ],
    correctAnswer: '51 Pegasi b',
  },
  {
    question: 'Comment les exoplanètes sont-elles nommées ?',
    options: [
      'En utilisant des noms de fleurs',
      'En utilisant des chiffres aléatoires',
      "En fonction de l'étoile autour de laquelle elles orbitent, suivies d'une lettre en ordre alphabétique",
      'En utilisant des noms de célébrités',
    ],
    correctAnswer: "En fonction de l'étoile autour de laquelle elles orbitent, suivies d'une lettre en ordre alphabétique",
  },
  {
    question: "Pourquoi la découverte d'exoplanètes habitables est-elle importante ?",
    options: [
      'Elle nous aide à comprendre la composition de notre propre planète',
      "Elle n'est pas importante du tout",
      "Elle suggère que la vie extraterrestre pourrait exister ailleurs dans l'univers",
      'Elle permet de trouver des endroits pour des colonies humaines',
    ],
    correctAnswer: "Elle suggère que la vie extraterrestre pourrait exister ailleurs dans l'univers",
  },
  {
    question: "Quelle est la mission spatiale qui a permis de découvrir des milliers d'exoplanètes ?",
    options: [
      'Mission Hubble',
      'Mission Cassini',
      'Mission Kepler',
      'Mission Apollo',
    ],
    correctAnswer: 'Mission Kepler',
  },
  {
    question: 'Quelle est la distance moyenne entre une étoile et son exoplanète en orbite ?',
    options: [
      'Quelques kilomètres',
      'Quelques dizaines de kilomètres',
      'Quelques milliers de kilomètres',
      'Des millions de kilomètres',
    ],
    correctAnswer: 'Des millions de kilomètres',
  },
  // Ajoutez d'autres questions ici
];


export default function PlanetPage() {
 
    const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  }, []);
 
  return (
    <main className="w-full flex justify-center items-center">
      <section className="m-auto mt-14">
        <h1
          className="text-white glow lettering uppercase font-light px-2 mb-8 mt-8 text-center w-full 
        text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
        >
          Quiz
        </h1>

      
       

        <div className="min-h-[65vh] flex items-center justify-center">
      <div className="bg-gradient-to-b from-cyan-500 to-green-500 rounded-lg p-1 shadow-md lg:w-[60em] md:w-full">
        {showScore ? (
          <div className="text-center bg-black rounded-lg h-full p-4">
            <h2 className="text-2xl text-white font-semibold">Votre score est de {score}/{questions.length}</h2>
            <button
              className="bg-[#1F2937] text-slate-300 px-4 py-2 mt-4 rounded-lg"
              onClick={() => window.location.reload()}
            >
              Rejouer
            </button>
          </div>
        ) : (
          <div className="bg-black rounded-lg h-full p-4">
            <h2 className="text-2xl text-white font-[400]">
                <span className="flex justify-between">
                    <p>Question</p>
                    <p> {currentQuestion + 1}/{questions.length}</p>
                </span>
            </h2>    
            <p className="text-2xl mt-4 text-white font-semibold">{questions[currentQuestion].question}</p>
            <div className="mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-[#1F2937] py-2 mt-2 rounded-lg  w-full px-4 font-light md:text-lg lg:text-lg text-slate-300 drop-shadow-md hover:text-white"
                  onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].correctAnswer)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
       
       
      </section>
    </main>
  );
}

