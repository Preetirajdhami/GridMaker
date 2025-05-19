import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { MdStyle } from "react-icons/md";
import { MdImage } from "react-icons/md";

const WhyGridify = () => {
  return (
    <section className="bg-base py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primaryText mb-10">
        Why Use Our Grid Tool?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-center items-center w-12 h-12 rounded-md bg-primary  mb-4 text-primaryText text-xl">
            <FaSlidersH />
          </div>
          <h3 className="font-semibold text-lg mb-2">Precision Control</h3>
          <p className="text-gray-600 text-sm">
            Fine-tune every aspect of your grid with pixel-perfect precision for professional results.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-center items-center w-12 h-12 rounded-md bg-primary  mb-4 text-primaryText text-xl">
            <MdStyle />
          </div>
          <h3 className="font-semibold text-lg mb-2">Custom Styling</h3>
          <p className="text-gray-600 text-sm">
            Choose colors, opacity, and line thickness to match your project's aesthetic needs.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-center items-center w-12 h-12 rounded-md bg-primary  mb-4 text-primaryText text-xl">
            <MdImage />
          </div>
          <h3 className="font-semibold text-lg mb-2">Instant Export</h3>
          <p className="text-gray-600 text-sm">
            Download your grid-overlaid images in high resolution for immediate use in your projects.
          </p>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="bg-secondary text-center rounded-xl py-10 px-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-primaryText mb-2">
          Ready to Perfect Your Compositions?
        </h3>
        <p className="text-primaryText mb-6 text-sm">
          Start creating precise grid overlays for your images today. No account required.
        </p>
        <a href="#grid-tool">
          <button className="bg-primary hover:bg-primary/90 hover:scale-105 text-white font-medium py-2 px-6 rounded-md transition">
            Try Grid Tool Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default WhyGridify;
