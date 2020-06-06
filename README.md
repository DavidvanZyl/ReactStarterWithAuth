# React App

This project was generated using [Nx](https://nx.dev).

## Generate an application

Run `nx g @nrwl/react:app <my-app>` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib <my-lib>` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@workspace/<mylib>`.

## Development server

Run `nx serve <my-app>` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=<my-app>` to generate a new component.

## Build

Run `nx build <my-app>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Update design tokens

Run `yarn design-tokens` to rebuild the design tokens into the shared UI lib as SCSS, or see the documentation below to extend the script in package.json per requirement (Update this entry as well).

## Running unit tests

Run `nx test <my-app>` to execute the unit tests via Jest.

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e <my-app>` to execute the end-to-end tests via Cypress.

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Running Storybook

Run `yarn storybook` to run and automatically open Storybook; ensure UI elements are properly storied and tested.

## Running UI Regression tests

Run `yarn loki test` to execute the UI regression tests via Loki.

Run `yarn loki approve` to accept the changes.

Images of any changes logged by Loki will be uploaded with the commit to be approved as part of any pull request.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more about the above Nx commands and other information relating to Nx.

Design Tokens - [Theo](https://github.com/salesforce-ux/theo)

UI Regression Testing - [Loki](https://loki.js.org/getting-started.html)

Storybook - [Storybook](https://storybook.js.org/docs/basics/introduction/)

E2E Testing - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

Unit Testing - [Jest](https://jestjs.io)
