# Members Platform Frontend

This is the frontend repository for the members platform of Eutopia.

## Requirements

node 11.9.0 (=> npm 6.5.0) // tip: use your platform-specific nvm (Node Version Manager) to install

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
