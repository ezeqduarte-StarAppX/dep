import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CarrouselPopulares.css";
import CardCarrouselPopular from "../../TypesCards/CardCarrouselPopular/CardCarrouselPopular";



export default function CarrouselPopulares({ components }) {
  /*/carrouseles con framer motion/*/
  const [scrollLeft, setScrollLeft] = useState(0);

  function scrollCarrousel() {
    //manejo de querys para scroll horizontal del carrousel
    console.log(window.screen.width);
    if (window.screen.width > 1700) {
      setScrollLeft(-970);
    }

    if (window.screen.width > 1400 && window.screen.width < 1700) {
      setScrollLeft(-1300);
    }

    if (window.screen.width > 1200 && window.screen.width < 1400) {
      setScrollLeft(-1550);
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
              <CardCarrouselPopular club={club}></CardCarrouselPopular>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
