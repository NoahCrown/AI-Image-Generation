# AI-Image-Generation

A full-stack MERN application for AI-powered image generation using OpenAI DALL-E.

## Features

- Generate images from text prompts using OpenAI DALL-E
- View and share generated images
- Responsive React frontend (Vite + Tailwind CSS)
- Node.js/Express backend with MongoDB for storage

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **AI Service:** OpenAI DALL-E API

## Installation

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB instance (local or cloud)
- OpenAI API key

### Clone the repository

```bash
git clone https://github.com/NoahCrown/AI-Image-Generation.git
cd AI-Image-Generation
```

### Setup Environment Variables

Create a `.env` file in the `server/` directory with the following:

```
OPENAI_API_KEY=your_openai_api_key
MONGODB_URL=your_mongodb_connection_string
```

### Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

### Run the Application

#### Start the server

```bash
cd server
npm start
```

#### Start the client

```bash
cd ../client
npm run dev
```

The client will run on [http://localhost:5173](http://localhost:5173) by default.

## Usage

- Enter a prompt in the input field to generate an image.
- View generated images in the gallery.
- Download or share images as desired.

## Linting & Code Quality

- ESLint is configured for the client (`client/.eslintrc.cjs`). Run `npx eslint .` in the `client/` directory to check code style.
- Please follow the code style and best practices described in [CONTRIBUTING.md](CONTRIBUTING.md).

## Testing

- **Tests are not yet implemented.** To contribute tests, create files in `client/src/__tests__/` and use a framework like Jest or React Testing Library.
- Add server-side tests in `server/tests/` using Mocha, Jest, or similar.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
