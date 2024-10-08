import Node from "./components/icons/Node.astro";
import Tailwind from "./components/icons/Tailwind.astro";
import Firebase from "./components/icons/Firebase.astro";
import MongoDB from "./components/icons/MongoDb.astro";
import HTML from "./components/icons/HTML.astro";
import Css from "./components/icons/CSS.astro";
import JavaScript from "./components/icons/JavaScript.astro";
import React from "./components/icons/React.astro";
import Git from "./components/icons/Git.astro";
import Astro from "./components/icons/AstroIcon.astro";
import MySql from "./components/icons/MySql.astro";
import Express from "./components/icons/Express.astro";
import GitHub from "./components/icons/GitHub.astro";


export const TAGS = {
    HTML: {
      name: "Html.js",
      class: "bg-[#AC3A0F]",
      icon: HTML,
    },
    CSS: {
      name: "Css.js",
      class: "bg-[#1A5F76]",
      icon: Css,
    },
    JAVASCRIPT: {
      name: "JavaScript",
      class: "bg-[#5C4F00]",
      icon: JavaScript,
    },
    REACT: {
      name: "React",
      class: "bg-blue-900",
      icon: React,
    },
    NODE:{
      name: "Node.js",
      class: "bg-[#0C560C]",
      icon: Node,
    },
    EXPRESS:{
        name: "Express.js",
        class: "bg-[#000000] text-white",
        icon: Express,
    },
    MONGODB: {
      name: "MongoDB",
      class: "bg-[#8B4513]",
      icon: MongoDB,
    },
    MYSQL: {
      name: "MySql",
      class: "bg-[#008CD7]",
      icon: MySql,
    },
    GIT: {
      name: "Git",
      class: "bg-[#F14E32]",
      icon: Git,
    },
    GITHUB: {
      name: "GitHub",
      class: "bg-[#181717]",
      icon: GitHub,
    },
    ASTRO: {
      name: "Astro",
      class: "bg-[#FFD700]",
      icon: Astro,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#1A5F76]",
      icon: Tailwind,
    },
  
    FIREBASE: {
      name: "Firebase",
      class: "bg-[#AC3A0F]",
      icon: Firebase,
    },
  };

  export const PROJECTS = [
    {
      title: "Mateando Ando",
      description:
        "ecommerce sobre Mates, Bombillas, Termos y accesorios sobre mates.Es mi primer proyecto creado desde cero con React y Firebase.",
      link: "https://mateando-ando.vercel.app/",
      github: "https://github.com/Matiim/mateando_ando",
      image: "/proyects/mateando-ando.webp",
      tags: [TAGS.REACT,TAGS.FIREBASE],
    },
    {
      title: "Tareas-CRUD",
      description:
        "CRUD de Tareas hecho con el Stack MERN, con sistema de registro y login de usuarios completo.",
      /* link: "#", */
      github: "https://github.com/Matiim/Tareas-CRUD",
      image: "/proyects/tasks-mern.webp",
      tags: [ TAGS.REACT, TAGS.MONGODB,TAGS.NODE,TAGS.EXPRESS]
    },
    {
      title: "Juego-QUIZ",
      description:
        "Juego QUIZ sencillo , con distintas categorias de preguntas y suma de puntos para ganar usando LocalState.",
      link: "juego-quiz-murex.vercel.app",
      github: "https://github.com/Matiim/juego-quiz",
      image: "/proyects/quiz.webp",
      tags: [TAGS.HTML,TAGS.CSS, TAGS.JAVASCRIPT ]
    },
    {
      title: "Hype-Sneakers",
      description:
        "Ecommerce de zapatillas completo con sistema de pago, panel para el administrador para poder agregar ,editar o eliminar productos , y un sistema de registro y login de usuarios completo.",
      /* link: "#", */
      github: "https://github.com/Matiim/Hype-Sneakers",
      image: "/proyects/tasks-mern.webp",
      tags: [ TAGS.REACT, TAGS.MONGODB,TAGS.NODE,TAGS.EXPRESS]
    },
    
  ];