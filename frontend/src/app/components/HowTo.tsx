import React from "react";

const steps = [
  {
    title: "1. Upload Your Image",
    description: "Start by uploading a reference image that you want to draw or scale. You can use JPG or PNG formats.",
  },
  {
    title: "2. Customize Your Grid",
    description: "Adjust the number of rows and columns, choose your grid line color, thickness, and decide whether you want a square grid.",
  },
  {
    title: "3. Download Your Grid Image",
    description: "Once you're satisfied, download your image with the grid overlay and use it as your reference offline.",
  },
  {
    title: "4.Start Drawing!",
    description: "Use your gridded reference to sketch your artwork on paper or canvas, maintaining accurate proportions.",
  },
];

const HowTo = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-base rounded-2xl shadow-sm text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primaryText mb-8">How to Use Gridify</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-secondary text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
            <p className="text-primaryText/80">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowTo;
