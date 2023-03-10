import React, { useEffect, useState } from "react";
import CardCarrousel from "../CardCarrousel/CardCarrousel";
import { motion } from "framer-motion";
import "./carrouselClubesPopulares.css";
import { clubes } from "../../../data/arrayPruebaCarrousel";
import { auto } from "@popperjs/core";
import CardPopularClubes from "../../TypesCards/PopularClubes/CardPopularClubes";

export default function CarrouseClubesPopulares({ components }) {
  const [scrollLeft, setScrollLeft] = useState(0);

  function scrollCarrousel() {
    console.log(window.screen.width);
    if (window.screen.width > 1700) {
      setScrollLeft(-970);
      console.log("hola soy grande");
    }

    if (window.screen.width > 900 && window.screen.width < 1700) {
      setScrollLeft(-1300);
      console.log("hola soy chico");
    }
  }

  useEffect(() => {
    scrollCarrousel();
  }, []);

  return (
    <>
      <motion.div className="slider-container-popular-clubes">
        <motion.div
          className="slider-popular-clubes"
          drag="x"
          dragConstraints={{ right: 0, left: scrollLeft }}
        >
          {components.map((club) => (
            <motion.div className="item">
              {" "}
              <CardPopularClubes club={club}></CardPopularClubes>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
