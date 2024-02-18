
const {ApolloServer} = require('apollo-server');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Apollo server
const typeDefs= require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const Server = new ApolloServer({
    typeDefs,
    resolvers, introspection: true, // Enable introspection
    playground: true, // Enable the GraphiQL UI
});

const PORT = process.env.PORT || 8080;

//DB connection string
const DB_URL = "mongodb+srv://sanjhvii:amipapa23@cluster0.hlgwu88.mongodb.net/labTest_01_chat_app?retryWrites=true&w=majority"

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Successfully connected to the database");
    return Server.listen({port: PORT});    
})
.then((res) => {
    console.log(`Server running at ${res.url}`);
});