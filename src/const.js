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
      class: "bg-[#5e3ab0]",
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
        "E-commerce de mates, bombillas, termos y accesorios. Este fue mi primer proyecto desarrollado desde cero, utilizando React para el frontend y Firebase para la gestión de base de datos y autenticación.",
      link: "https://mateando-ando.vercel.app/",
      github: "https://github.com/Matiim/mateando_ando",
      image: "/proyects/mateando-ando.webp",
      tags: [TAGS.REACT,TAGS.FIREBASE],
    },
    {
      title: "Tareas-CRUD",
      description:
        "Aplicación CRUD de Tareas desarrollada con el stack MERN (MongoDB, Express, React, Node.js), que incluye un sistema completo de registro y login de usuarios para gestionar las tareas de manera eficiente.",
      link: "https://tareas-crud-delta.vercel.app/login",
      github: "https://github.com/Matiim/Tareas-CRUD",
      image: "/proyects/tasks-mern.webp",
      tags: [ TAGS.REACT,TAGS.EXPRESS,TAGS.NODE,TAGS.MONGODB]
    },
    {
      title: "Landing-Tesla",
      description:
        "Landing page de la marca Tesla, donde se muestra sus nuevos modelos de automóviles y sus características.",
      link: "https://landing-tesla-lime.vercel.app/", 
      github: "https://github.com/Matiim/landing-tesla/tree/master",
      image: "/proyects/landing-tesla.webp",
      tags: [ TAGS.ASTRO, TAGS.TAILWIND,TAGS.JAVASCRIPT]
    },
    {
      title: "Juego-QUIZ",
      description:
        "Juego de preguntas tipo Quiz, con diferentes categorías y un sistema de puntuación basado en el estado local (LocalState) para determinar al ganador.",
      link: "juego-quiz-murex.vercel.app",
      github: "https://github.com/Matiim/juego-quiz",
      image: "/proyects/quiz.webp",
      tags: [TAGS.HTML,TAGS.CSS, TAGS.JAVASCRIPT ]
    }
    
    
  ];