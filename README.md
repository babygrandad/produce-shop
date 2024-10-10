# Web-Based Product Display Application Documentation

## Table of Contents
1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Installation Instructions](#installation-instructions)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [User Roles](#user-roles)
8. [Seeding Data](#seeding-data)
9. [Design Considerations](#design-considerations)
10. [OOP Design Patterns and Practices](#oop-design-patterns-and-practices)

---

## Overview
This document outlines the details of a web-based application developed for the Singular Systems technical assessment. The application displays product details retrieved from an API and provides various functionalities for users, including viewing statistics based on user roles.

## Technologies Used
- **Frontend**: React
- **Backend**: ASP.NET, .NET 8, C#
- **Database**: SQL
- **Libraries/Dependencies**:
  - @emotion/styled
  - @mui/icons-material
  - bootstrap
  - axios
  - chart.js
  - react-router-dom
  - react-toastify
  - react-data-table-component
  - ... (and others as listed)

## Features
- Displays products from an API in a grid format.
- Allows users to view detailed product statistics based on their roles.
- Search products by name (fruits and vegetables).
- Filter products by category (fruit or vegetable), with buttons displaying available in each category.
- Users can add items to the cart, edit quantities, and delete items.
- Intuitive user interface that displays logged-in user information (email, username) in the header.
- Admin and manager roles can access detailed product statistics, including revenue, average sale price, and average sales.

## Installation Instructions
1. **Clone the Repository**:
   ```bash
   git clone [Produce-Shop]("https://github.com/babygrandad/produce-shop.git")
   cd produce-shop
   ```

2. **Install Dependencies**:
   Navigate to both the frontend and backend directories and install the dependencies:
   ```bash
   # For the frontend
   cd frontend
   npm install

   # For the backend
   cd api
   dotnet restore
   ```

## Configuration
### Backend Configuration
1. Create a `.env` file in the backend directory based on the `env.example` file provided.
2. Set the following variables:
   ```plaintext
   CONNECTION_STRING=add your database connection string
   SIGN_IN_KEY=add your signin key (64-bit string)
   FRONT_END_LINK=http://localhost:3000 (or your frontend client link)
   ALLOWED_CONNECTIONS=Same as your FRONT_END_LINK or 0.0.0.0 if in production
   ```

### Frontend Configuration
1. Create a `.env` file in the frontend directory:
   ```plaintext
   REACT_APP_BASE_URL=http://localhost:5173/api
   ```

## Usage
1. **Start the Backend Server**:
   Navigate to the backend directory and run:
   ```bash
   dotnet run
   ```

2. **Start the Frontend Server**:
   Navigate to the frontend directory and run:
   ```bash
   npm start
   ```

3. Access the application at `http://localhost:3000` (or the configured frontend URL).

## User Roles
- **Admin and Manager**: Can view product statistics, including revenue and average sales.
- **Regular Users**: Can only view the product grid and manage items in their cart.

## Seeding Data
Seed data is provided for the admin user with the following credentials:
- **Email**: Admin@example.com
- **Password**: AdminPassword@1

## Design Considerations
- The user interface is designed to be intuitive and user-friendly, with easy navigation through a side menu.
- UI/UX considerations were taken into account to enhance the overall user experience.

## OOP Design Patterns and Practices
- Implemented object-oriented concepts such as abstraction and encapsulation.
- Used Data Transfer Objects (DTOs) for data handling.
- Applied modular design principles to improve code reusability and maintainability.
