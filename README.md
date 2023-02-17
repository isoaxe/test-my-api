# Test my API Endpoint

This is a utility to test that API endpoints are returning the value that the user expects. A specific use case is to test a request that has been prepended by [`cors-server`](https://github.com/isoaxe/cors-server) before a user forks that project to host their own server.

You can give the remote-hosted version a go [here](https://test-my-api-endpoint.web.app). If local hosting is desired, fork the project and follow the **Project Setup** steps outlined below.


## Technology

Built using React, TypeScript and Material UI for the frontend. Hosted with Firebase. Extends the ESLint from Create React App and uses Prettier to enforce style. 


## Project Setup

From the root directory, run the following:

### `npm install`

Installs all required node packages.

### `npm start`

Starts the app in development mode. This re-renders the UI when changes are made. Does not build any files for production (i.e. does not transpile TypeScript to plain JavaScript as would be required before deployment).