const express = require("express");
const helmet = require("helmet");

const UserRouter = require("./users/user-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/users", UserRouter);

//eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the server!'
    });
});

module.exports = server;
