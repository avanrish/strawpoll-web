# StrawPoll

This project is a front-end clone of StrawPoll.com, a popular online tool for creating and sharing polls. It's built using Next.js, tailored with Tailwind CSS for styling, and incorporates `next-intl` for internationalization, along with Chart.js for rendering poll results visually.

## Features

- Create and share polls easily.
- Real-time results visualization with Chart.js.
- Responsive design with Tailwind CSS.
- Internationalization support with `next-intl`.

## Prerequisites

Before you begin, ensure you have installed Node.js on your system. This project uses `pnpm` as the package manager.

## Installation

To set up the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/avanrish/strawpoll-web
   ```
2. Navigate to the project directory:
   ```bash
   cd strawpoll-web
   ```
3. Install the dependencies:
   ```bash
   pnpm install
   ```
   You can also use `npm` or `yarn`, but `pnpm` is recommended for this project.
4. Create a `.env` file in the root of the project:
   ```bash
   cp .env.example .env
   ```
   You can modify the environment variables in the `.env` file as needed.

## Running the Application

To start the development server, run:
```bash
pnpm dev
```
The application will be available at `http://localhost:3000`.

## Back-End Integration

This front-end application requires a corresponding back-end to function properly. Please set up the back-end from [this repository](https://github.com/avanrish/strawpoll-api) before running the front-end application.

## License

[MIT](LICENSE.md)
