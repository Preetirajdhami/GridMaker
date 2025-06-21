import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center rounded-3xl  md:p-12 p-6 text-center  max-w-7xl mx-auto my-12">
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <Image
          src="/hero.png"
          alt="Artist working illustration"
          width={500}
          height={300}
          className="mx-auto max-w-sm md:max-w-md w-full h-auto"
        />
        <p className="text-xs text-gray-500 mt-4">
          <a
            href="https://storyset.com/people"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 transition-colors duration-200"
          ></a>
        </p>
      </div>

      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primaryText mb-6 tracking-tight">
          A Free Tool Made for Artists 🎨
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Gridify empowers artists, illustrators, and designers to create
          precise grid overlays on their images — completely free. Whether
          you&aposre sketching from a reference or scaling your masterpiece,
          Gridify ensures simplicity, accuracy, and accessibility.
        </p>
        <a href="#grid-tool">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
