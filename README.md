# MrwWebFront

This is the website of the cli tool `mrw`. It's an Angular 19 server side rendering website with a Strapi CMS for content editing.

## Development server

To start a local development server, run:

```bash
npm run watch
```

Once the server is running, open your browser and navigate to `http://localhost:400/`. The application will automatically rebuild and run whenever you modify any of the source files.

## Pre commit hooks
**Install Husky**
`npx husky install`

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm run test
```

## Running end-to-end tests
Spoon
