# Polling Application

This application allows users to get an opinion on a certain topic.\
Technology used: TypeScript, React, Nextjs, TailwindCSS, GraphQL, Apollo Server, MongoDB.\
Live preview is available [here](https://poll-app.blipinski.pl/ 'Polling Application')

## Installation

```
# First of all, clone this repo
git clone https://github.com/bartoszlipinski/poll-app.git
# Install dependencies in root directory ./ and in ./next-client
yarn install
```

Remove 'example' from names of files `config.example.js` and `./next-client/.env.local.example`.\
In config.js you need to paste your connection string to MongoDB (either locally installed or Atlas)
In .env.local (`./next-client`) add your Github ID and secret (if you want authentication).\
In GRAPHQL_URI provide link to GraphQL server (default localhost:4000).\
NEXTAUTH_URL is a link to main page of a website (default localhost:3000).\
That's it! Now you can start Next and GraphQL servers with command `yarn start`
