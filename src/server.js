import express from "express"; // Importing express to create a server

const PORT = 4000;
// Setting the port number for the server
// This is the port where the server will listen for incoming requests
// 4000 is a common choice for development servers
const app = express(); // Creating an instance of express

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT}`);
// Function to handle the server listening event
// It logs a message to the console when the server starts listening on the specified port
app.listen(4000, handleListening)
// Starting the server and listening on port 4000
// The handleListening function will be called once the server is successfully running on the specified port