**Question search api**


This is the search application for the Question Search API, built using GRPC AND NODE  The backend allows users to search for questions, filter them by type, and paginate through results. It also provides suggestions as users type in the search box.


Start MongoDB: Ensure MongoDB is running on your local machine.

Run gRPC Server


**change directory**

```
cd GrpcBackend
cd backend
cd src

```

**Compile the qusetion.proto file**

cd src/proto
protoc -I=. --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. question.proto
Start React App

**start server**

```
nodemon app.js
```

**Start the postman**

1:Navigate to file->new 

2:select as grpc request

3:insert the query in the message

4:hit the invoke button


####################################################################

# Question search Api
This is the search application for the Question Search API, built using MERN stack The application allows users to search for questions, filter them by type, and paginate through results. It also provides suggestions as users type in the search box.


## Features


- **Search Functionality:** Search for questions using a query.
- **Suggestions:** Get search suggestions as you type.
- **Filtering:** Filter questions by type (e.g., MCQ, Anagram, Read Along).
- **Pagination:** Navigate through pages of search results.
- **Responsive UI:** Built with Material-UI for a responsive and modern interface.

## Tech Stack

**Client:** React, Redux-toolkit, Material UI.

**Server:** Node, Express.

**Database**: MongoDb.


## Run Locally

Clone the project

```bash
  https://github.com/Nitishrai1/SearchApi-SpeakX/tree/main/SearchApi
```

Go to the project directory

```bash
  cd SearchApi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```



