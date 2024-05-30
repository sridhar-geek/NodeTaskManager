# Task Manager

## Description

**This is Task Manager Application build using Nodejs and ExpreesjsIt perform basic CRUD operations using REST API**

## Usage

To test the api routes in Postman, use can use this endpoints

```sh
Base Url: https://books-api-chi.vercel.app/api/books
```

**For all requests set the Content-Type in header as application/json and send data in json format**

## CRUD Operations

 - **To Get Tasks**

 Method: **GET**

 Route:  https://books-api-chi.vercel.app/api/books

It will fetches all the tasks.

- **To Create a New Task**

Method: **POST**

 Route: https://books-api-chi.vercel.app/api/books

It will add new task to the task manager.

example data {
"title":"Complete Pending Work",
}

- **Update Task**

Method: **PUT**

 Route:  https://books-api-chi.vercel.app/api/books/:id

It will update the whole task.

example data {
"title":"Complete Pending Work",
"Completed": false
}
- **Delete Task**

Method: **DELETE**

 Route:  https://books-api-chi.vercel.app/api/books/:id

It will delete the task.


## SetUp/Installation
 Clone the repository using `git clone https://github.com/sridhar-geek/booksAPI ` 
 and install dependencies using `npm install` command

Create .env file and updates this varaibles with your own connection string.  It is optional.

- PORT