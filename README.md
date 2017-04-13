# Finnest Initial Project Design

This directory contains rough sketch of Finnest Web App front-end.

## HOW TO RUN:
  1. 'npm install' (to install node modules)
  2. 'npm run build' (to build static bundle w/ webpack)
  3. 'npm run dev' (to run webpack dev server )
  4. http://localhost:8080 on web browser

## USER FLOW:
  Homepage

  ↓↓

  Parent Registration/Login

  ↓↓↓

  [ Child Registration, Transfer Money, Account History ]

  ** -> Terms of Use

## DIRECTORY STRUCTURE:

     web-client2-/
     ├── index.html
     └── public/------------------ Webpack bundle directory
         ├── bundle.js ----------- Webpack bundle
         └── img/ ---------------- imgs
     └── js/
         ├── App.js -------------- Root Component
         ├── components/ --------- React Components
         ├── actions/ ------------ Redux actions
         ├── containers/ --------- Redux-aware React Components
         └── reducers/ ----------- Redux reducers
