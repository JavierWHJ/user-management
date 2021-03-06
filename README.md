# User Management Application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Install [Node.js](https://nodejs.org/en/).

### Installing and Running the App

Install Dependencies inside the user-management folder.

```
npm install
```

Runs the mock server (json-server)
Has to be running for CRUD API endpoints to work

```
json-server --port 3030 --watch db.json
```

Routes
* GET /users
* POST /users
* PUT /users/id
* DELETE /users/id

Runs the app in the development mode. The app will automatically reload if you change any of the source files.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
npm start
```

## Running unit tests

```
npm test
```

## Deployment

- Builds the app for production. The build artifacts will be stored in the `dist/` directory (with gzip mode).

```
npm run build
```

## Built With

- React (Front End Framework).
- TypeScript (Static Typing for Javascript).
- React-Testing-Library (Testing Framework).

## Authors

- **Javier** - [@javierwhj](https://github.com/javierwhj)
