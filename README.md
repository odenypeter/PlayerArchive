# PlayerArchive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server
Run `npm install` to install the dependancies
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running unit tests with coverage
Run `ng test --coverage` to execute the unit tests via [Karma](https://karma-runner.github.io)

# Application Architecture

## Structure
src
/app
    /clients
        /pages
            /player-details
                *player-details.component.ts
                *player-details.component.spec.ts
                *player-details.component.html
                *player-details.component.sccss
        /components
            /player-search-form
                *player-search-form.component.ts
                *player-search-form.component.spec.ts
                *player-search-form.component.html
                *player-search-form.component.scss
            /player-search-results
                -player-search-results.component.ts
                -player-search-results.component.spec.ts
                -player-search-results.component.html
                -player-search-results.component.scss
            /player-not-found
                -player-not-found.component.ts
                -player-not-found.component.spec.ts
                -player-not-found.component.html
                -player-not-found.component.scss
    /store
        /reducers
            -index.ts
        /effects
            -index.ts
        /player
            /actions
                -player.actions.ts
                -player.actions.spec.ts
            /effects
                -player.effects.ts
                -player.effects.spec.ts
            /reducers
                -player.reducers.ts
                -player.reducers.spec.ts
            /selectors
                -player.selecors.ts
    -app.component.ts
    -app.component.html
    -app.component.spec.ts
    -app.component.scss
    -app.module.ts
    -app-routing.module.ts


## Approaches
-The app uses lazy loading
-NgRx/Store for state managements
-All requests to the API are made through NgRx side effects
-The store states are selected using custom NgRx/store selectors
