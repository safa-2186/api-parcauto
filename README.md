# API ParcAuto

## Une agence de location de voitures veut une API pour gérer ses véhicules. 

## To start the node.js project :
- npm init -y
- npm install express
- npm install -D nodemon

`"type": "module"`

## Project Structure

```
api-parcauto/
├── middlewares/
│   └── journal.js
├── routes/
│   └── vehicules.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Configuration (.env & .gitignore)

- Create a `.env` file at the root of the project and add the server port:
   ```env
   PORT=3000

- Make sure .gitignore excludes node_modules/ and .env before pushing to GitHub