# Books Club Project Documentation

## Project Overview

Welcome to the Fan Books Club - Rome project! This is a single-page application (SPA) built with Angular 20 that allows users to register, log in, log out or browse a collection of books and add new books to the library. The application uses the Soft practice server as its backend.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You'll need the following installed on your machine:

Node.js (LTS version is recommended)

npm (Node Package Manager, which comes with Node.js)

Angular CLI (globally installed)

npm install -g @angular/cli

SoftUni Practice Server

## Installation

Clone the repository:

```bash
git clone fan-books-club
```

Navigate into the project directory:

```bash
cd ./fan-books-club
```

## Install the dependencies

```bash
npm install
```

Add the data from the input-data folder into the seedData variable in the server.js from the SoftUni under the key "books".

## Running the Application

To run the development server, use the following command. The application will be accessible at `http://localhost:4200/`.

```bash
ng serve
```

## 📂 Project Structure

This project follows a standard Angular folder structure. Key directories and files include:

src/app/: Contains the main application logic.

~app/guards: Guards for application-wide functionality.

~app/interceptors: Interceptors for application-wide functionality.

~app/models: Models for necessary objects.

~app/services: Services for authentication and books.

shared/: Reusable components header, footer, not found components.

features/: Feature modules and forms for auth for login/register, books for displaying books and user profile.

auth/: Handles user authentication, including login and registration components.

mybooks/: Manages book-related functionality, such as viewing and adding books.

## 🔑 Features and Functionality

### User Authentication

Register: New users can create an account using a reactive form.

Login: Existing users can log in to access authenticated routes.

Logout: Users can securely log out of their session.

Authentication Guard: Protects routes that require a user to be logged in.

### Books Management

View Books: Users can browse a list of all available books.

Add New Book: Logged-in users can add a new book to the database using a reactive form.

### Shared Components

Header and Footer: Consistent navigation through the app.

Error Handling: A system for displaying user-friendly error messages in the reactive forms.

### 🤝 Backend Integration

This project is built to work with the SoftUni practice server API. The API endpoints used are:

`http://localhost:3030/users/login`

`http://localhost:3030/users/register`

`http://localhost:3030/users/logout`

`http://localhost:3030/data/books` (for fetching all books)

`http://localhost:3030/data/books` (for adding a new book)

`http://localhost:3030/data/books\:id` (for editing a book)

## 🛠️ Technologies Used

Frontend: Angular 20

Reactive Forms: For form handling and validation.

Plain HTML & CSS

Backend: SoftUni Practice Server
