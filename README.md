# ...[backend Martin R.V.]...

This is the back-end of the Vendor v2 system.

## Content

Back-End user and sales controller.
The project is carried out in:

- [Node.js](https://nodejs.org/en)
- [express.js](https://expressjs.com/)
- [Mysql](https://www.mysql.com/)


  **THIS IS A NON-VISUAL SERVER**

## Required programs

In order to use the project on localhost it is necessary to clone it and have some necessary programs:

- [Nodejs](https://nodejs.org/es/download/) v16.20.1 or Higher.
- [SQL Workbench](https://www.mysql.com/) instance and workbench
- Development IDE of your convenience Ex. [VS Code](https://code.visualstudio.com/download)
- [Insomnia](https://insomnia.rest/download) for APIS tests. (Optional)


## Installation

Once the project is cloned, it is necessary to install all the dependencies with the command:

```bash
npm install
```
### Folder Configuration Database

Folder configuration database conection : src/services/mysql2.js  

Execute: ./createDatabase.sql  

### Run on LocalHost:

```bash
npm run api
```
This in turn will execute nodemon app.js, which will help with the testing functionality.
