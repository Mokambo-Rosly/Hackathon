/* 
SNATCHED FROM: https://www.coltborg.com/style-a-blockquote-using-tailwind-css/ 
very cool accessibility points btw
*/

import React from "react";

const Quote = () => (
  <blockquote className="relative p-4 text-lg italic border-l-4 bg-slate-900 text-slate-300 border-slate-700 quote bg-opacity-50">
    <div className="stylistic-quote-mark" aria-hidden="true">
      &ldquo;
    </div>
    <p className="mb-4">
    On estime en moyenne qu'il existe au moins une planète pour chaque étoile de la galaxie, ce qui implique qu'il pourrait y avoir des milliards de planètes dans notre seule galaxie, dont beaucoup ont une taille similaire à celle de la Terre. Ces planètes situées en dehors de notre système solaire sont communément appelées {" "}
      <strong className="rainbowText font-bold">Exoplanètes</strong>
    </p>
    <cite className="flex items-center">
      <div className="flex flex-col items-start">
        <span className="mb-1 text-sm italic font-bold">
          exoplanets.nasa.gov
        </span>
        <a
          href="..."
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        ></a>
      </div>
    </cite>
  </blockquote>
);

export default Quote;
