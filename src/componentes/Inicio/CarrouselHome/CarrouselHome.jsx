import React from "react";
import CardCarrousel from "../CardCarrousel/CardCarrousel";
import { motion } from "framer-motion";
import "./carrouselHome.css";
import { clubes } from "../../../data/arrayPruebaCarrousel";

export default function CarrouselHome({ components, card }) {
  return (
    <motion.div className="slider-container">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -1490 }}
      >
        {components.map((image) => (
          <motion.div className="item">
            {" "}
            <CardCarrousel component={image}></CardCarrousel>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
