import React from 'react'

const Intro = () => {
  return (
    <section className="rounded-2xl bg-secondary md:p-10 p-6 text-center shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-primaryText mb-4">
        A Free Tool Made for Artists 🎨
      </h2>
      <p className="text-primaryText/80 text-lg max-w-2xl mx-auto mb-6">
        Gridify helps artists, illustrators, and designers create precise grid overlays on their images — absolutely free. Whether you're sketching from a reference or scaling your masterpiece, Gridify makes it simple, accurate, and accessible.
      </p>
      <a href="#grid-tool">
        <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200">
          Get Started
        </button>
      </a>
    </section>
  )
}

export default Intro
