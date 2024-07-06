import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white relative"
    >
      <div className="max-w-screen-lg px-4 py-4 mx-auto flex flex-col justify-center w-full h-full  pt-20">
        <div className="pb-4">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            About Me!
          </p>
          <p className="pt-6">
            What I Do?
          </p>
        </div>

        <ul className="text-xl mt-5">
  <li className="text-xl my-2">⚡️ I don't build castles in the sky, I craft real-world web applications with a powerful foundation.</li>
  <li className="text-xl my-2">⚡️ Django, JavaScript, and React-Redux are my trusty companions, allowing me to sculpt dynamic and interactive websites.</li>
  <li className="text-xl my-2">⚡️ Efficiency is my middle name, and FastAPI is my secret weapon for streamlining interactions with RESTful APIs.</li>
  <li className="text-xl my-2">⚡️ Merging the power of machine learning with web development, I design customer-centric experiences using cutting-edge tools like Streamlit.</li>
  <li className="text-xl my-2">⚡️ Backends are my playground, whether it's building robust structures with Django, Flask, or Node.js.</li>
</ul>
        <br />
      </div>
    </div>
  );
};

export default About;

