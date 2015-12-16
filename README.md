# Web Components
Web Components For 101 Panel Tech Days

## Pre-requisites
To execute the examples we need to have install some software listed below. Every example has an index.html page which contains links to the examples. You must use NodeJS to start a small web server to run the examples in your machine

### NodeJS
To install NodeJS:
 1. [Go to nodejs homepage](https://nodejs.org)
 2. Download
 3. Install

### Bower
Bower is a package manager. To install follow the next steps:

 1. Open a terminal
 2. Execute `$ npm install -g bower`

## Example 1
Shows some basic web component using native js and polyfills to make runnable in almost all browsers.

- panel-hello: shows "Hello 101 Panel Tech Days"
- panel-message: shows messages with parameters and content
- panel-select: how extend HTML Elemenets, in this case an select element

1. Download repository
2. Execute `$ bower install` to download bower dependencies
3. Execute `$ node install` to download node dependencies
4. Execute `$ node server/app.js` to start nodeJS server

Run http://localhost:3000 to see the examples

## Example 2
Creates the same web components that are created on example 1 but in this time we use Polymer

Follow the same steps in example 1 and play with it

## Example 3
Small site to manage users (create/update/list/delete) with:

1. NodeJS + Express + MongoDB server
2. Application in HTML + Polymer

To run the example follow the steps showed bellow:

### MongoDB
MongoDB is a NoSQL database. To install:

1. [Go to MongoDB page](https://www.mongodb.org/) download and install it

Running the example:

1. Download repository
2. Execute `$ bower install` to download bower dependencies
3. Execute `$ node install` to download node dependencies
4. Execute `$ mongod --dbpath=database` on project directory
4. Execute `$ node server/app.js` to start nodeJS server

Run http://localhost:3000/public to see the examples

