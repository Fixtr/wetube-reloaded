import express from "express"; // Importing express to create a server

const PORT = 4000;
// Setting the port number for the server
// This is the port where the server will listen for incoming requests
// 4000 is a common choice for development servers

const app = express();
// Creating an instance of express
// This instance will be used to set up the server and define routes
const handleHome = ()=> 
  console.log("Someone is trying to access the home page");
  // Function to handle requests to the home page
  // It logs a message to the console when someone accesses the home page
// This function can be expanded to send a response back to the client if needed
// For example, it could send a simple HTML response or JSON data
// The handleHome function can be modified to return a response to the client
// For example, you could use res.send("Welcome to the home page!") to send a response

app.get("/", handleHome);
// Setting up a route for the home page
// When a GET request is made to the root URL ("/"), the handleHome function will be called
// This is where you can define what happens when someone accesses the home page
// You can add more routes for different pages or functionalities as needed

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT}`);
// Function to handle the server listening event
// It logs a message to the console when the server starts listening on the specified port
app.listen(4000, handleListening)
// Starting the server and listening on port 4000
// The handleListening function will be called once the server is successfully running on the specified port