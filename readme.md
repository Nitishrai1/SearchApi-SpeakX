FrontEnd part

Collapse
# Question Search API Frontend

This is the frontend application for the Question Search API, built using React, Redux Toolkit, and Vite. The application allows users to search for questions, filter them by type, and paginate through results. It also provides suggestions as users type in the search box.

## Features

- **Search Functionality:** Search for questions using a query.
- **Suggestions:** Get search suggestions as you type.
- **Filtering:** Filter questions by type (e.g., MCQ, Anagram, Read Along).
- **Pagination:** Navigate through pages of search results.
- **Responsive UI:** Built with Material-UI for a responsive and modern interface.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nitishrai1/SearchApi-SpeakX/tree/main/SearchApi
   cd SearchApi
Install Dependencies:

BASH

npm install
Set Up Environment Variables:

Create a .env file in the root directory and add your environment variables:

PLAINTEXT

VITE_API_URL=https://api.example.com
Replace https://api.example.com with your actual API URL.

Running the Application
To start the development server, run:

BASH

npm run dev
This will start the Vite development server. Open your browser and navigate to http://localhost:5173 to view the application.

Building for Production
To build the application for production, run:

BASH

npm run build
This will create a dist directory with the production build of your application.

Linting
To lint your code, run:

BASH

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
React
Redux Toolkit
Vite
Material-UI


### Customization

- **Repository URL:** Replace `https://github.com/Nitishrai1/SearchApi-SpeakX` with the actual URL of your repository.
- **API URL:** Ensure the `VITE_API_URL` in the `.env` section matches your backend API URL.
- **Additional Sections:** Add any additional sections relevant to your project, such as known issues, future improvements, or specific setup instructions.

This README provides a comprehensive overview of your project and should help others get started with your frontend application. If you have


Backend part

# Question Search API Backend

This is the backend application for the Question Search API, built using Node.js, Express, and MongoDB. It provides endpoints to search questions, retrieve suggestions, and supports pagination and filtering.

## Features

- **Search API:** Search questions based on a query string.
- **Suggestions API:** Get search suggestions based on input queries.
- **Pagination:** Supports pagination for efficient data retrieval.
- **Filtering:** Filter questions by type (e.g., MCQ, Anagram, Read Along).
- **Caching:** Utilizes in-memory caching for optimized performance (optional).

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance running (locally or via a service).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nitishrai1/SearchApi-SpeakX/tree/main/backend
   cd ans-search-api-backend

Install Dependencies:

BASH

npm install
Set Up Environment Variables:

Create a .env file in the root directory and add your environment variables:

PLAINTEXT

MONGO_URI=mongodb://localhost:27017/yourdbname
PORT=5000
Replace mongodb://localhost:27017/yourdbname with your actual MongoDB connection URI.

Running the Application
To start the server, run:

BASH

npm start
This will start the Express server on the specified PORT (default is 5000). The server will be available at http://localhost:5000.



API Endpoints
GET /api/questions/search: Search for questions with optional pagination and filtering.

Query Parameters:
q: Search query string.
page: Page number for pagination (default is 1).
limit: Number of results per page (default is 10).
type: Filter by question type (optional).
GET /api/questions/suggestions: Get search suggestions based on input query.

Query Parameters:
q: Search query string.
Project Structure
models/: Database models and schemas.
routes/: Route handlers and API endpoints.
middleware/: Middleware functions (e.g., cache checks).
config/: Configuration files (e.g., database connection).
controllers/: Business logic separated from routing.

Acknowledgments
Express
MongoDB
Mongoose
Node.js