![Netlify](https://img.shields.io/netlify/53967b51-b43d-4821-9bc1-05bf0fcedabd)
![LICENSE](https://img.shields.io/badge/license-MIT-green)

# What is Dashley?
Dashley is an assesment task showcasing a Responsive UI built with React. It has been built with no frameworks other then React(TypeScript) and Webpack. The app utilizes PostCSS with CSS Modules. This enables components to have their styling locally scoped.

## How To Set Up
To set up the app, follow the following steps:
- Run `npm install` to install dependancies.
- To start the development server, run `yarn dev`.
- To build the app for production, run `yarn build`.

## How is the project structured?
The main entry point, `src/index.tsx`, serves as the Router. It render's different components from the *templates* directory depeding on the current url.