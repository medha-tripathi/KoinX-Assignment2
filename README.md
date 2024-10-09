Technologies
- Node.js: JavaScript runtime for building server-side applications.
- Express.js: Web framework for building the API.
- Mongoose: Object Data Modeling (ODM) library for MongoDB.
- node-cron: For scheduling background tasks.
- Axios: Promise-based HTTP client for API requests.
- MongoDB: NoSQL database for storing cryptocurrency data.

Installation

1. Clone the repository:
   git clone https://github.com/medha-tripathi/KoinX-Assignment2.git
   cd KoinX-Assignment2

2. Install the dependencies:
   npm install

3. Set up the environment variables in a .env file.

4. Start the application:
   node index.js

Environment Variables

You need to set up the following environment variables in a .env file:

- MONGO_URI: The MongoDB connection string for your database.
- PORT: The port on which your Node.js server will run.

API Endpoints

1. Get Latest Stats
- URL: /stats
- Method: GET
- Query Parameters:
  - coin: The cryptocurrency (either bitcoin, ethereum, or matic-network).
- Response:
  {
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
  }

2. Get Standard Deviation of Prices
- URL: /deviation
- Method: GET
- Query Parameters:
  - coin: The cryptocurrency (either bitcoin, ethereum, or matic-network).
- Response:
  {
    "deviation": 4082.48
  }
