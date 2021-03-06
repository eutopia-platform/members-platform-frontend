# Frontend

This is the frontend repository for Eutopia.

## Requirements

node 8 // tip: use your platform-specific nvm (Node Version Manager) to install

## Usage

### TL;DR

(s. Requirements)

```
$ npm install
$ npm start
```

Run `$npm run format-lint:write` after all changes.

### Install all dependencies

(Make sure to have all requirements installed)

```
$ npm install
```

This will download all the necessary npm packages, so you can start working.

### Starting the frontend locally

(Make sure to have all dependencies installed)

```
$ npm start
```

This will watch the source files for any changes and start a local development server with hot module reloading.

### Building the frontend

(Make sure to have all dependencies installed)

```
$ npm run build
```

Bundles all the resources into a browser readable [production build](https://parceljs.org/production.html) in `dist/`.

### Checking the formatting / running the formatter

(We are using Prettier as our formatter of choice. If you consider working on this project, we highly recommend setting up your IDE to automatically run prettier on code changes.)

```
$ npm run format:check
```

Checks whether all files match the project's formatting.

```
$ npm run format:write
```

Runs the formatter and makes all files match the project's formatting.

### Running the js-linter

(We are using eslint as our linter of choice. If you consider working on this project, we highly recommend setting up your IDE to integrate eslint.)

```
$ npm run lint:check
```

Checks the `.js` and `.vue` files in the src/ directory for any linter errors/warnings.

```
$ npm run lint:write
```

Checks the `.js` and `.vue` files in the src/ directory for any linter errors/warnings and fixes what it can fix by itself.

### Running both the linter and the formatter

```
$ npm run format-lint:check
```

Checks for any formatting or linter errors/warnings.

```
$ npm run format-lint:write
```

Checks for any linter errors/warnings, fixes what it can and then formats all code.

## Component structure

We are using App.vue as an empty container component for all top level pages on the project.

Currently, the following top level pages exist:

- Landing page
- Project hub
- 404 Not found

These have corresponding Vue componenets found in `pages/` and corresponding routes defined in `index.js`

Currently the routes are:

- Landing page: `/#/`
- Project hub: `/#/project-hub`
- 404 Not found: `/#/anything-else`

Each page can be viewed by typing in its URL.
