# Robobai

A simple UX focused approach for maining products in an inventory.

<p align="center"><img src="https://robobai.com/wp-content/uploads/robobai-icon-1-120x119-160x158.png" width="222"></p>

App Screenshots at /robobai/apps/inventory/src/assets/screenshots

## Tech Stack
Nest JS for Server BackEnd. 
Angular 10 for FrontEnd
Mongo DB 4.2.6, Community Edition

## Directory Pattern
Monorepo using Nx

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

## Architectural Decisions

### Front End 
A single product module having multiple components to serve a tab-based interaction. Angular Material implementation to provide consistent UI.

FE features included
1. Modularity
2. Animations
3. Separate Directives/Custom Validators
4. Material Design Pattern
5. Standard Icons
6. Optimized Search

### Back End
A single product module handling the Controllers,Service and Schemas with secure connection.

BE features include
1. Modularity
2. Dependency Injection
3. Class-Validators to pre-validate API communication
4. Exception Handling
5. Shared Code
6. API hit limit based on IPs

## Generate an application


## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).


