node_challenge
=======

A simple application to generate lists and track items by checking/unchecking them. Application is built using Node/Express, AngularJS, and Boostrap.

## Assignment Requirements
All requirements were met as they were understood in this assignment

Backend
- Use Express, Koa, another server framework, or use the native HTTP methods
  - Bind to a port that is defined in an environment file excluded from source control
  - Create a set of RESTful URL patterns to support creating, accessing/editing a list
  - Display a 404 error for any invalid route
- Use a template engine in conjunction with the server framework
- Model the data
  - Store the data in JSON, XML, or YAML
  - Save the lists with type 4 UUIDs
  - Include the list name
  - Include item names
  - Include whether the item is checked
  - In lieu of a database, save the list data to the local file system
Frontend
- Use a responsive framework like Bootstrap or Foundation
- Use a UI framework like React, Angular, Backbone, or Ember
- Interaction
  - Allow users to name their list
  - Allow users to add new list items
  - Allow users to check/uncheck list items
  - Allow users to save their list

## Development

### Configuring Application

1. Follow instruction given in "example.env" file
2. Save "example.env" file as ".env" in root directory

### Installing Dependencies
Install server and client dependencies then run the app. From within the root directory:

```
npm install
bower install
npm start
```
