import express from "express"; // Importing express to create a server
import morgan from "morgan"; // Importing morgan for logging HTTP requests

const PORT = 4000;
// Setting the port number for the server
// This is the port where the server will listen for incoming requests
// 4000 is a common choice for development servers

const app = express();
// Creating an instance of express
// This instance will be used to set up the server and define routes
// The app variable will hold all the configurations and middleware for the server
// The express instance allows us to define routes, middleware, and handle requests and responses
// The app variable is the main entry point for our server application
// The app variable is used to configure the server and define how it responds to different requests
// The app variable is the main object that we will use to set up our server

const logger = morgan("dev");
// Using morgan middleware for logging HTTP requests
// This middleware logs incoming requests to the console in a development-friendly format
// The "dev" format provides concise output colored by response status for development purposes
// The logger variable holds the morgan middleware configured to log requests in the "dev" format
// The logger middleware will log details about each request made to the server
// The logger middleware can be used to monitor incoming requests and their responses

const home = (req, res) => {
    return res.send("Hello from home!");
};
// Function to handle requests to the home page
// It logs a message to the console when someone accesses the home page
// This function can be expanded to send a response back to the client if needed
// For example, it could send a simple HTML response or JSON data
// The home function can be modified to return a response to the client
// For example, you could use res.send("Welcome to the home page!") to send a response

const login = (req, res) => {
    return res.send("Hello from login!");
};
// Function to handle requests to the login page
// It logs a message to the console when someone accesses the login page
// This function can be expanded to send a response back to the client if needed
// For example, it could send a simple HTML response or JSON data
// The login function can be modified to return a response to the client
// For example, you could use res.send("Welcome to the login page!") to send a response


app.use(logger);
// Using the gossipMiddleware for all incoming requests
// This middleware will log a message to the console for every request made to the server
// It can be used to perform actions before the request is handled by the route handler
// The gossipMiddleware can be used to log request details, perform authentication, or modify the request
// The gossipMiddleware is applied globally, meaning it will run for every request made to the server

app.get("/", home);
// Setting up a route for the home page
// When a GET request is made to the root URL ("/"), the handleHome function will be called
// This is where you can define what happens when someone accesses the home page
// You can add more routes for different pages or functionalities as needed

app.get("/login", login);
// Setting up a route for the login page
// When a GET request is made to "/login", the handleLogin function will be called
// This is where you can define what happens when someone accesses the login page
// You can add more routes for different pages or functionalities as needed

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT}`);
// Function to handle the server listening event
// It logs a message to the console when the server starts listening on the specified port
app.listen(4000, handleListening)
// Starting the server and listening on port 4000
// The handleListening function will be called once the server is successfully running on the specified port