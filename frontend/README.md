# Grid Maker

A modern web application built with Next.js that allows users to overlay customizable grids on images. Perfect for artists, designers, and anyone who needs to analyze or segment images using grids.

## Features

- Image upload functionality
- Customizable grid overlay
  - Adjustable rows and columns
  - Configurable line color and width
  - Toggle between square and rectangular grid patterns
- Responsive design (mobile and desktop support)
- Real-time grid adjustments
- Modern, clean user interface with card-based design

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Preetirajdhami/GridMaker.git
cd grid-maker/frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Upload an image using the control panel
2. Customize your grid using the following options:
   - Number of rows and columns
   - Line color
   - Line width
   - Toggle between square and rectangular grid
   - Show/hide grid

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## Project Structure

```
frontend/
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   │   ├── control-panel.tsx
  │   │   │   ├── grid-drawing-tool.tsx
  │   │   │   └── grid-overlay.tsx
  │   │   ├── hooks/
  │   │   │   └── use-mobile.ts
  │   │   ├── layout.tsx
  │   │   └── page.tsx
  │   └── ...
  ├── public/
  └── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
