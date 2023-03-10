import React, { useEffect, useState } from "react";
import CardCarrousel from "../CardCarrousel/CardCarrousel";
import { motion } from "framer-motion";
import "./carrouselHome.css";
import { clubes } from "../../../data/arrayPruebaCarrousel";
import { auto } from "@popperjs/core";

export default function CarrouselHome({ components, card }) {
  const [scrollLeft, setScrollLeft] = useState(0);

  function scrollCarrousel() {
    console.log(window.screen.width);
    if (window.screen.width > 1700) {
      setScrollLeft(-1400);
    }

    if (window.screen.width > 900 && window.screen.width < 1700) {
      setScrollLeft(-1730);
    }
  }

  useEffect(() => {
    scrollCarrousel();
  }, []);

  return (
    <>
      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: scrollLeft }}
        >
          {components.map((image) => (
            <motion.div className="item">
              {" "}
              <CardCarrousel component={image}></CardCarrousel>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
