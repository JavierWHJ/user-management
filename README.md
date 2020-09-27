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

## Built With

- React (Front End Framework).
- TypeScript (Static Typing for Javascript).

## Authors

- **Javier** - [@javierwhj](https://github.com/javierwhj)


## Available Scripts

In the project directory, you can run:


## npm install

installs all dependencies

## npm start

Runs the app in the development mode.<br />
