# nodejs_mongoDB-jwt

JWT authentication architecture

First user attempt to login with their credentials.
After server verifies the credentials, it sends JSON Web Token to the client.
A client then saves that token in local storage or any other storage mechanism.
Again if a client wants to request a protected route or resource, then it sends JWT in a request header.
The server verifies that JWT and if it is correct then return a 200 response with the information, client needs.
If the JWT is invalid, then it gives unauthorized access or any other restricted message.
