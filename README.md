# challenge-13


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
## Description

This is an ecommerce backend that allows for the viewing and manipulation of a mysql database over a server with sequelize, mysql2, express, and dotenv.


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [GitHub](#github)
* [Video](#video)
* [License](#license)

## Installation
Install express as follows: 

```
npm i express
```
Install dotenv as follows: 

```
npm i dotenv
```
Install mysql2 as follows: 

```
npm i mysql2
```
Install sequelize as follows: 

```
npm i sequelize
```

## Usage
First, fill out the env.example with your credentials.  After mysql permissions are in order, open the directory in the CLI and open mySQL.  Run 'source db/schema.sql', then exit mySQL and run the server.js file, making sure the sequelize force is set to true.  Once the server is running, exit the server, set the sequelize force to false, save the server file, and in the command line execute 'npm run seed' to seed the database.  Then, restart the server and test the routes in Insomnia.

## Github

* https://github.com/tuckerreiland/challenge-13

## Video

* https://drive.google.com/file/d/1mWd5FhpHoZy-_6oz-ChLvOOBaV8bSoEp/view?usp=sharing

## License

MIT License
