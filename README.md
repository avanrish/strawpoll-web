# Polling Application

This web application was developed to learn GraphQL on client and server side.
\
\
Live demo at [_poll-app.blipinski.com_](https://poll-app.blipinski.com/).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Directory Structure](#directory-structure)
- [Acknowledgements](#acknowledgements)

## Technologies Used

- **React** (v17) - Front-End lirary
- **NextJS** (v11) - React framework
- **Tailwind CSS** (v2) - CSS framework
- **GraphQL** (v16) - API
- **NextAuth** (v4) - Authentication for Next.js
- **Apollo** (client, server v3) - GraphQL platform
- **MongoDB with mongoose** - NoSQL database and its ODM (Object Data Modelling) library
- **TypeScript** (v4)

## Features

- Log in
- Create polls
  - Public (visible by everyone)
  - Unlisted (visible by people with link)
- Vote in polls
- Check results

## Setup

### Installation

In order to get the project running locally, you need to download the repo: \
`git clone https://github.com/avanrish/poll-app.git`\
Next step is to go into `poll-app` directory and install all dependencies in `client` and `server` directories respectively:

```
cd client && npm install
cd server && npm install
# or
cd client && yarn install
cd server && yarn install
```

### Server

After installing all dependencies you need to create a MongoDB database ([Guide](https://www.mongodb.com/basics/create-database)), after it's done, enter your connection string in `server/config.js` (see `server/config.example.js`).\
Now while inside `server` directory enter following in command line:

```
npm run dev
# or
yarn dev
```

### Client

In `client` directory enter your GraphQL server URL and NextAuth URL in `.env.local` (see `.env.local.example`).\
Generate NextAuth secret ([see here](https://next-auth.js.org/configuration/options#secret)) and fill it in `.env.local`.\
Last thing is to generate and fill OAuth Provider data in environmental variables. Guide: [Github](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)\
After it's done and you can develop the app.

```
npm run dev
# or
yarn dev
```

## Directory Structure

```sh
poll-app/
├─── client         # Application's Front-End
│   ├─── components # Reusable parts
│   ├─── hooks      # Custom hooks
│   ├─── pages      # Application views
│   ├─── public     # Public files
│   └─── styles     # General app styles
└─── server         # Application's Back-End
    ├─── graphql    # Type definitions and resolvers for GraphQL API
    ├─── models     # Database models
    └─── util       # Utility functions
```

## Acknowledgements

This application was inspired by older version of [strawpoll.com](https://strawpoll.com/), application was made for me to learn new things and will never be used commercially.
