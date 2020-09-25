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

## Build and Serve

Run `npm run serve-app` to build and run the project. The build artifacts will be stored in the `dist/` directory. This will open the default browser page after the Node server has started.

## Scope of Improvement

1. Meta-search on Front-end and backend
2. Runtime Configurable Databases
3. Indexing when app scales
4. Authentication and Authorization if scope is restricted


