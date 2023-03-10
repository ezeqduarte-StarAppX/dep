import React from "react";
import CardCarrousel from "../CardCarrousel/CardCarrousel";
import { motion } from "framer-motion";
import "./carrouselClubesPopulares.css";
import { clubes } from "../../../data/arrayPruebaCarrousel";
import { auto } from "@popperjs/core";
import CardPopularClubes from "../../TypesCards/PopularClubes/CardPopularClubes";

export default function CarrouseClubesPopulares({ components }) {
  return (
    <>
      <motion.div className="slider-container-popular-clubes">
        <motion.div
          className="slider-popular-clubes"
          drag="x"
          dragConstraints={{ right: 0, left: -1790 }}
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
