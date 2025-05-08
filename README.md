# AI-Image-Generation

A MERN stack application for AI-powered image generation using OpenAI DALL-E.

## Overview

AI-Image-Generation is a web application that allows users to generate images from text prompts using OpenAI's DALL-E API. The project is built with the MERN stack (MongoDB, Express, React, Node.js) and demonstrates full-stack development with modern JavaScript technologies.

## Features

- Generate images from text prompts using OpenAI DALL-E
- View and share generated images
- Responsive and modern UI with React and Tailwind CSS
- RESTful API backend with Node.js and Express
- MongoDB for storing posts and images

## Installation

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)
- OpenAI API key

### Clone the repository

```bash
git clone https://github.com/NoahCrown/AI-Image-Generation.git
cd AI-Image-Generation
```

### Install dependencies

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd ../client
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory with the following:

```
OPENAI_API_KEY=your_openai_api_key
MONGODB_URL=your_mongodb_connection_string
```

### Running the Application

#### Start the server

```bash
cd server
npm start
```

#### Start the client

```bash
cd client
npm run dev
```

The client will run on [http://localhost:5173](http://localhost:5173) by default.

## Usage

1. Enter a text prompt in the input field.
2. Click "Generate" to create an image using DALL-E.
3. View, download, or share generated images.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

For questions or support, please open an issue or contact the maintainer:

- GitHub: [NoahCrown](https://github.com/NoahCrown)

---

**Note:**  
- Please use ESLint and Prettier for code style consistency.  
- Consider adding unit tests and GitHub Actions for CI/CD in future contributions.
