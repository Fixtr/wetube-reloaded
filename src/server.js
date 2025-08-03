import express from "express"; // Importing express to create a server

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

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    // This middleware logs a message to the console when it is executed
    // It can be used to perform actions before the request is handled by the route handler
    // For example, it could log request details, modify the request object, or perform authentication
    // The next() function is called to pass control to the next middleware or route handler
    next();
    // Calling next() is important to ensure that the request continues to the next middleware or route
    // If next() is not called, the request will hang and not proceed to the next step
};  

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    // This middleware checks if the request URL is "/login"
    // If the URL is "/login", it allows the request to proceed to the next middleware
    // If the URL is not "/login", it sends a 404 Not Found response
    if (url === "/protected") {
      return res.send("<h1>Not Found</h1>");
    }
    // If the URL is not "/login", it allows the request to proceed to the next middleware
    console.log("Allowed, you shall pass");
    next();
    // Calling next() is important to ensure that the request continues to the next middleware or route
    // If next() is not called, the request will hang and not proceed to the next step
};
    // This middleware logs a message to the console when it is executed

const handleHome = (req, res)=> {
    return res.send("I still love you, wetube!");
};
  // Function to handle requests to the home page
  // It logs a message to the console when someone accesses the home page
// This function can be expanded to send a response back to the client if needed
// For example, it could send a simple HTML response or JSON data
// The handleHome function can be modified to return a response to the client
// For example, you could use res.send("Welcome to the home page!") to send a response

const handleProtected = (req, res) => {
    return res.send("Welcome to the protected page!");
};
// Function to handle requests to a protected page
// It logs a message to the console when someone accesses the protected page
// This function can be expanded to send a response back to the client if needed
// For example, it could send a simple HTML response or JSON data
// The handleProtected function can be modified to return a response to the client
// For example, you could use res.send("Welcome to the protected page!") to send a response

const handleLogin = (req, res) => {
    return res.send("Login page");
};
// Function to handle requests to the login page
// It logs a message to the console when someone accesses the login page
// This function can be expanded to send a response back to the client if needed
// For example, it could send a simple HTML response or JSON data
// The handleLogin function can be modified to return a response to the client
// For example, you could use res.send("Welcome to the login page!") to send a response

app.use(logger);
// Using the gossipMiddleware for all incoming requests
// This middleware will log a message to the console for every request made to the server
// It can be used to perform actions before the request is handled by the route handler
// The gossipMiddleware can be used to log request details, perform authentication, or modify the request
// The gossipMiddleware is applied globally, meaning it will run for every request made to the server

app.use(privateMiddleware);
// Using the privateMiddleware for all incoming requests
// This middleware will check if the request URL is "/login"
// If the URL is "/login", it will allow the request to proceed to the next middleware
// If the URL is not "/login", it will send a 404 Not Found response
// The privateMiddleware can be used to perform actions before the request is handled by the route handler
// The privateMiddleware can be used to log request details, perform authentication, or modify the request

app.get("/", handleHome);
// Setting up a route for the home page
// When a GET request is made to the root URL ("/"), the handleHome function will be called
// This is where you can define what happens when someone accesses the home page
// You can add more routes for different pages or functionalities as needed

app.get("/protected", handleProtected);
// Setting up a route for a protected page
// When a GET request is made to "/protected", the handleProtected function will be called
// This is where you can define what happens when someone accesses the protected page
// You can add more routes for different pages or functionalities as needed 

app.get("/login", handleLogin);
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