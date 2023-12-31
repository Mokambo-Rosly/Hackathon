import { Link } from "react-router-dom";
import Zdog from "zdog";
import { Tooltip, Button, Accordion } from "flowbite-react";
import { useState, useEffect } from "react";
//
let onPlanetMouseOver;
let onPlanetMouseOut;
//
export default function SolarSystem(props) {
  const { TAU } = Zdog;
  let planetz = [];
  let zdog_canvas;
  let pause = false;
  /* 
  Inspired by https://codepen.io/tiencoffee/pen/OePgEg
 */
  const CreateSolarSystem = (solarSystem) => {
    //console.log("creating solar system");
    let isSpinning = true;
    let selectedPlanet = null;
    let illo = new Zdog.Illustration({
      element: "#canvas",
      dragRotate: true,
      resize: true,
      rotate: {
        y: TAU * 0.4,
        x: -TAU / 10,
      },
      onDragStart: () => {
        isSpinning = false;
      },
      onDragEnd: function () {
        isSpinning = true;
      },
      onResize: function (width) {
        //this.zoom = innerWidth / 115;
        if (this.zoom < 10) this.zoom = 10;
      },
    });
    for (let planet of solarSystem) {
      // console.log("planet", planet);
      let parentBody = planet.satelliteOf
        ? solarSystem.filter((p) => p.name === planet.satelliteOf)[0].planet
        : illo;
      //console.log("parent", parentBody);
      //
      planet.anchor = new Zdog.Anchor({
        addTo: parentBody,
        translate: {
          z: planet.orbitTranslateZ,
        },
        rotate: {
          y: planet.orbitNode,
          z: planet.orbitTilt,
        },
      });
      //
      planet.orbitAnchor = new Zdog.Anchor({
        addTo: planet.anchor,
      });
      //
      if (!planet.ring) planet.ring = 1;
      planet.orbits = [];
      if (planet.orbitDiameter > 0) {
        for (let i = 0; i < planet.ring; i++) {
          const orbit = new Zdog.Ellipse({
            addTo: planet.orbitAnchor,
            diameter: planet.orbitDiameter + i * 0.3,
            quarters: 4,
            rotate: {
              x: TAU / 4,
            },
            stroke: planet.name === "sun" ? 0 : 0.1,
            color: "#fff3",
          });
          orbit.name = planet.name;
          planet.orbits.push(orbit);
        }
      }
      if (planet.ring == 1) {
        planet.planet = new Zdog.Shape({
          addTo: planet.orbitAnchor,
          translate: {
            x: planet.orbitDiameter / 2,
          },
          stroke: planet.diameter,
          color: planet.color,
          name: planet.name,
        });
        planet.planet.name = planet.name;
      }
      if (planet.starColor) {
        planet.light = new Zdog.Shape({
          addTo: planet.orbitAnchor,
          translate: {
            x: planet.orbitDiameter / 2,
          },
          stroke: planet.diameter + planet.starLight,
          color: planet.starColor,
          name: planet.name,
        });
        planet.light.name = planet.name;
      }
    }
    //
    let n = 0;
    animate(solarSystem, illo);
    zdog_canvas = illo;
    /* 
  Interactivity inspired from https://codepen.io/gregja/pen/rEGmGB 
  */
    const canvas_visible = document.getElementById("canvas");
    /* const tool_tip = document.getElementById("tooltip-default");
  //
  const getMousePos = function (canvas, evt) {
    // It's a very reliable algorithm to get mouse coordinates (don't use anything else)
    // it works fine on Firefox and Chrome
    // source : https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
    var rect = canvas.getBoundingClientRect();
    return {
      x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
      y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
    };
  };
  //
  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  //
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  //
  const getPixel = function (context, x, y) {
    // console.log("getPixel", context, x, y);
    let imageData = context.getImageData(x, y, 1, 1);
    //console.log(imageData);
    let data = imageData.data;
    return rgbToHex(data[0], data[1], data[2]);
  };
  //
  function onMouseMove(e) {
    let left = e.offsetX;
    let top = e.offsetY;
    tool_tip.style.left = left + 20 + "px";
    tool_tip.style.top = top + 100 + "px";
    shapeClicked(e);
  }
  //
  let ito = 0;
  function shapeClicked(evt) {
    clearTimeout(ito);
    let coords = getMousePos(canvas_visible, evt);
    let color = getPixel(context_visible, coords.x, coords.y);
    if (!selectedPlanet) {
      // console.log("clicked color", color);
      let k = solarSystem.filter((s) => {
        return s.color === color;
      });

      if (k && k.length > 0) {
        pause = true;
        let p = k[0].planet;
        p.originalColor = p.color;
        p.color = "#FFF";
        if (selectedPlanet) {
          selectedPlanet.color = selectedPlanet.originalColor;
        }
        selectedPlanet = p;
        // console.log("selectedPlanet", selectedPlanet);
        document.getElementById("tooltip-title").innerHTML =
          selectedPlanet.name;
        tool_tip.classList.remove("opacity-0");
        canvas_visible.classList.add("cursor-pointer");
        canvas_visible.classList.remove("cursor-move");
      } else {
        ito = setTimeout(() => {
          resetCanvas();
          tool_tip.classList.add("opacity-0");
        }, 100);
      }
    } else {
      resetCanvas();
    }
  } */
    function resetCanvas() {
      if (pause) {
        pause = false;
        animate();
        canvas_visible.classList.add("cursor-move");
        canvas_visible.classList.remove("cursor-pointer");
      }
      if (selectedPlanet) {
        selectedPlanet.color = selectedPlanet.originalColor;
        selectedPlanet = null;
      }
    }
    //
    onPlanetMouseOver = (p) => {
      let k = solarSystem.filter((pl) => p === pl.name);
      if (k && k.length > 0) {
        const planet = k[0].planet;
        // console.log("onPlanetMouseOver", planet.color, planet.originalColor);
        planet.originalColor = planet.color;
        planet.color = "#FFF";
        planet.originalStroke = planet.stroke;
        planet.stroke = planet.originalStroke + planet.originalStroke * 0.5;
        //console.log("planet", planet.addTo);
        //tool_tip.style.left = left + 20 + "px";
        //tool_tip.style.top = top + 100 + "px";
        // console.log("onPlanetMouseOver", planet.color, planet.originalColor);
        //tool_tip.classList.remove("opacity-0");
        document.getElementById("tooltip-title").innerHTML = planet.name;
        if (selectedPlanet) {
          selectedPlanet.color = selectedPlanet.originalColor;
          selectedPlanet.stroke = selectedPlanet.originalStroke;
        }
        selectedPlanet = planet;
        pause = true;
      }
    };
    //
    onPlanetMouseOut = () => {
      if (selectedPlanet) {
        selectedPlanet.color = selectedPlanet.originalColor;
        selectedPlanet.stroke = selectedPlanet.originalStroke;
        selectedPlanet = null;
        pause = false;
        animate(solarSystem, illo);
        //tool_tip.classList.add("opacity-0");
      }
    };
    //
    let context_visible = canvas_visible.getContext("2d");
    //canvas_visible.addEventListener("click", shapeClicked, false);
    //canvas_visible.addEventListener("mousemove", onMouseMove, false);
    //canvas_visible.addEventListener("mouseleave", resetCanvas, false);
  };
  function animate(solarSystem, illo) {
    for (let planet of solarSystem) {
      planet.orbitAnchor.rotate.y -= TAU / planet.orbitPeriod / 5;
      if (planet.satelliteOf && planet.satelliteOf != "sun") {
        planet.anchor.rotate.y +=
          TAU /
          solarSystem.filter((p) => p.name === planet.satelliteOf)[0]
            .orbitPeriod /
          5;
      }
    }
    //if (isSpinning) illo.rotate.y += 0.01;
    illo.updateRenderGraph();
    if (!pause) requestAnimationFrame(() => animate(solarSystem, illo));
  }
  //
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    if ((planetz.length = 0)) {
      planetz = props.planets;
      setPlanets(props.planets);
    }
    if (!zdog_canvas) CreateSolarSystem(props.planets);
  }, [planets]);
  return (
    <div className="bg-black rounded-lg w-full h-full relative overflow-hidden">
      <div className="absolute bottom-4 left-4 right-4 z-50">
        <Tooltip
          content="Ceci est une image imaginaire d'un système planétaire. Les cercles représentant les orbites. La couleur de l'étoile est basée sur le type d'étoile qu'elle est. Les tailles des planètes sont dessinées pour montrer comment elles se comparent en taille, comme si elles étaient de grosses ou petites planètes par rapport à Jupiter. La durée que mettent les planètes à faire le tour de l'étoile est montrée en fonction du nombre de jours qu'il leur faut, et l'inclinaison de leurs orbites est dessinée pour montrer comment elles sont inclinées par rapport à leur orbite réelle. Les couleurs des planètes sont basées sur le type de planète et sur les images fournies par la NASA pour la visualisation."
          trigger="click"
        >
          <Button size="xs" pill={true} color="dark">
          Qu'est-ce que c'est ?
          </Button>
        </Tooltip>
      </div>
      <PlanetaryBodies planets={props.planets}></PlanetaryBodies>
      <canvas
        id="canvas"
        className="w-full h-full block cursor-move absolute"
      ></canvas>
    </div>
  );
}

const PlanetaryBodies = (props) => {
  const onPlanetBodyOver = (e) => {
    //onPlanetMouseOver(e.relatedTarget.dataset.planet);
  };
  //
  const onPlanetBodyOut = (e) => {
    //onPlanetMouseOut();
  };
  //
  let pbodies = props.planets.map((planet) => {
    let link;
    let className;
    switch (planet.type) {
      case "star":
        link = "/star/" + planet.id;
        className =
          "text-orange-500 hover:text-white active:text-white transition-all";
        break;
      case "moon":
        link = "/planets/" + planet.id;
        className =
          "text-blue-500 hover:text-white active:text-white transition-all";
        break;
      default:
        link = "/planets/" + planet.id;
        className =
          "text-green-500 hover:text-white active:text-white transition-all";
        break;
    }
    if (planet.displayName) {
      return (
        <li key={planet.name} data-planet={planet.name}>
          <Link
            data-planet={planet.name}
            onMouseOver={onPlanetBodyOver}
            onMouseOut={onPlanetBodyOut}
            key={link}
            className={className}
            style={{ color: planet.color }}
            to={link}
          >
            {planet.displayName}
          </Link>
        </li>
      );
    }
    return null;
  });
  return (
    <div className="rounded-lg, absolute z-10 p-4 h-auto lg:h-full">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>Corps planétaires</Accordion.Title>
          <Accordion.Content>
            <ul className="text-white">{pbodies}</ul>
            <aside className="text-sm text-slate-300 mt-2">
            Cliquez pour visiter une planète
            </aside>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
