import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import Heropic from "../assets/King.jpg";

const hero = () => {
  return (
    <section
      className="flex justify-around items-center p-10 space-x-10
     lg:flex-row ssm:flex-col ssm:space-y-10 text-white"
    >
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300 lg:ml-0 ssm:ml-10">
          I'm
          <h1 className="text-6xl">JOSHUA OLUWASEUN ODUSANYA</h1>
          <hr />
          <p className="mt-4 text-xl text-slate-300 font-sans">
            In publishing and graphic design, lorem ipsum is a placeholder text
            commonly used to to demonstrate the visual form of a document or a
            typeface's without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </p>
      </div>
      <div className="lg:w-1/3 items-center ssm:w-fit">
        <img
          src={Heropic}
          alt="Heropic"
          width={250}
          height={250}
          className="rounded-full w-full border-8 border-white"
        />
      </div>
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">
          About Me
          <p className="mt-4 text-xl text-slate-300">
            Let's build quality in programming ad design with our services
          </p>
        </p>
        <button
          className="bg-white text-indigo-600 px-10 py-2 my-3 
        rounded-full hover:bg-indigo-800 hover:text-white"
        >
          Show More...
        </button>

        <div className="flex mt-5 space-x-4 cursor-pointer">
          <BsFacebook
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsTwitter
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsInstagram
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsPinterest
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default hero;
