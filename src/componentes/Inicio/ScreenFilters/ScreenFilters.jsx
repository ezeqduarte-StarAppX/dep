import React from "react";
import CardFilterClub from "../CardFilterClub/CardFilterClub";
import "./screenFilters.css";

const filterClubes = [
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
  {
    type: "club",
    fotoGrande:
      "http://www.cariverplate.com.ar/imagenes/contenidos/2022-02/20439-temporadapileta.jpg",
    fotoEscudo:
      "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png",
    nombreClub: "Real Madril Club - CABA",
    direccion: "Calle 2000, CABA, Buenos Aires",
    servicies: [
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
      { name: "6 canchas", img: "./svg/cancha.svg" },
      { name: "Estacionamiento", img: "./svg/estacionamiento.svg" },
      { name: "Vestuarios", img: "./svg/vestuarios.svg" },
      { name: "Wifi", img: "./svg/wifi.svg" },
    ],
  },
];

export default function ScreenFilters() {
  return (
    <div className="screen-filters">
     
      {filterClubes.map((club) => (
        <CardFilterClub club={club}></CardFilterClub>
      ))}
    </div>
  );
}
