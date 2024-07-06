import React from "react";
import universityStore from "../assets/portfolio/University-Store.png";
import linkButton from "../assets/portfolio/link.png";
import passwordGenerator from "../assets/portfolio/Password-Generator.png";
import catalogViewer from "../assets/portfolio/Catalog-Viewer.png";
import draggableList from "../assets/portfolio/Draggable-List.png";
import amazonClone from "../assets/portfolio/Amazon-Clone.png";
import meetingMate from "../assets/portfolio/MeetingMate.png";
import snakeGame from "../assets/portfolio/Snack-Game.png";
import flightPath from "../assets/portfolio/Flight-Path.png";
import frontedChallenge from "../assets/portfolio/Fronted-Challenge.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: universityStore,
      name: "University Store",
      link: "https://dpancha6.github.io/university-store/",
    },
    {
      id: 2,
      src: catalogViewer,
      name: "Catalog Viewer",
      link: "https://dpancha6.github.io/catalog-viewer/"
    },
    {
      id: 3,
      src: passwordGenerator,
      name: "Password Generator",
      link: "https://dpancha6.github.io/react-gererate-password/"
    },
    {
      id: 4,
      src: draggableList,
      name: "Draggable List (NextJS, Tailwind)",
      link: "https://dpancha6.github.io/next-tailwind-draggable-list/"
    },
    {
      id: 5,
      src: amazonClone,
      name: "Amazon Clone",
      link: "https://dpancha6.github.io/Amazon-Clone/"
    },
    {
      id: 6,
      src: frontedChallenge,
      name: "Transactions Challenge",
      link: "https://dpancha6.github.io/Frontend-Challenge/"
    },
    {
      id: 7,
      src: meetingMate,
      name: "Meeting Mate",
      link: "https://github.com/Dpancha6/MeetingMate?tab=readme-ov-file#meetingmate"
    },
    {
      id: 8,
      src: snakeGame,
      name: "Snake Game",
      link: "https://github.com/Dpancha6/snake-game?tab=readme-ov-file#screenshots"
    },
    {
      id: 9,
      src: flightPath,
      name: "Flight Path",
      link: "https://github.com/Dpancha6/Flight_Path_API?tab=readme-ov-file#request-body"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 ">
              <img
                src={src}
                alt=""
                className="rounded-md"
              />
              <div className="flex items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="m-3 duration-200 hover:scale-105 hover:text-white-900 hover:font-bold">
                  {name}
                  <img
                src={linkButton}
                alt="link button"
                className="inline m-2 h-4 color-white"
              />
                </button>
                </a>
                {/* <img
                src={link}
                alt="link button"
                className="pl-1 h-5 color-white"
              /> */}
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-white-900">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
