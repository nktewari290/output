# Project

This repository contains an Angular application generated with Angular CLI 21.2.7.

## Prerequisites

- Node.js 18+ installed
- npm installed
- (Optional) Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

## Install dependencies

From the project root, run:

```bash
npm install
```

## Run the app locally

Start the development server with:

```bash
npm start
```

Then open your browser at:

```text
http://localhost:4200/
```

The app will automatically reload when source files change.

## Useful commands

- `npm start` — run the app locally with live reload
- `npm run build` — build the app for production
- `npm run watch` — rebuild continuously during development
- `npm test` — run unit tests

## Build output

Production build artifacts are generated in the `dist/` folder.

## Notes

If Angular CLI is not installed globally, use:

```bash
npx ng serve
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
