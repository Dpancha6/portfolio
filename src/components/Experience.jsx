import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Typescript from "../assets/Typescript.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png"; 
import Python from "../assets/Python.png"; 
import postman from "../assets/postman.png"; 
import Django from "../assets/Django.png"; 
import Java from "../assets/Java.png"; 
import docker from "../assets/docker.png";
import SpringBoot from "../assets/SpringBoot.png";
import aws from "../assets/aws.png"; 
import Mysql from "../assets/Mysql.png";
import Redux from "../assets/Redux.png";

const Experience = () => {
  const techs = [
    { id: 1, src: javascript, title: "JavaScript", color: "#f7df1e", description: "Scripting language for dynamic web content." },
    { id: 2, src: reactImage, title: "React", color: "#61DAFB", description: "A JavaScript library for building user interfaces." },
    { id: 3, src: Redux, title: "Redux", color: "#764ABC", description: "A predictable state container for JavaScript apps." },
    { id: 4, src: node, title: "Node.js", color: "#339933", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
    { id: 5, src: Python, title: "Python", color: "#3776AB", description: "Versatile, readable programming language." },
    { id: 6, src: Java, title: "Java", color: "#007396", description: "Object-oriented programming language." },
    { id: 7, src: Mysql, title: "MySQL", color: "#4479A1", description: "An open-source relational database management system." },
    { id: 8, src: Typescript, title: "TypeScript", color: "#3178C6", description: "A typed superset of JavaScript that compiles to plain JavaScript." },
    { id: 9, src: github, title: "GitHub", color: "#181717", description: "A platform for version control and collaboration." },
    { id: 10, src: postman, title: "Postman", color: "#FF6C37", description: "API development and testing platform." },
    { id: 11, src: Django, title: "Django", color: "#092E20", description: "Python web framework for rapid development." },
    { id: 12, src: SpringBoot, title: "SpringBoot", color: "#6DB33F", description: "Java framework for microservices." },
    { id: 13, src: html, title: "HTML", color: "#e34c26", description: "Markup language for web pages." },
    { id: 14, src: css, title: "CSS", color: "#1572B6", description: "Styles web pages with HTML or XML." },
    { id: 15, src: tailwind, title: "Tailwind", color: "#38B2AC", description: "Utility-first CSS framework." },
    { id: 16, src: aws, title: "AWS", color: "#FF9900", description: "A secure cloud services platform." },
    { id: 17, src: docker, title: "Docker", color: "#2496ED", description: "Containerization platform." },
    { id: 18, src: graphql, title: "GraphQL", color: "#E10098", description: "A data query and manipulation language for APIs." },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Experience</p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, color, description }) => (
            <div key={id} className={`relative hover:scale-105 transition-transform duration-300 ease-in-out`}>
              <div className="perspective-container">
                <div className="card">
                  <div className="card-face card-front">
                    <img src={src} alt={title} className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  <div className="card-face card-back" style={{borderColor: color, borderWidth: '4px', borderStyle: 'solid' }}>
                    <p className="text-white text-center">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;