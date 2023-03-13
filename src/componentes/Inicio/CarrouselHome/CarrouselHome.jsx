import React, { useEffect, useState } from "react";
import CardCarrousel from "../CardCarrousel/CardCarrousel";
import { motion } from "framer-motion";
import "./carrouselHome.css";

export default function CarrouselHome({ components, card }) {

  /*/carrouseles con framer motion/*/

  const [scrollLeft, setScrollLeft] = useState(0);

  function scrollCarrousel() {
    console.log(window.screen.width);
    if (window.screen.width > 1700) {
      setScrollLeft(-1400);
    }

    if (window.screen.width > 900 && window.screen.width < 1700) {
      setScrollLeft(-1730);
    }

    if (window.screen.width > 1200 && window.screen.width < 1400) {
      setScrollLeft(-1960);
      console.log("hola soy chico");
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
          {components.map((content) => (
            <motion.div className="item">
              {" "}
              <CardCarrousel component={content}></CardCarrousel>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
