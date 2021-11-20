const { timeStamp } = require('console');
const express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: { origin: "*"}
});

var mysql = require('mysql')

var con = mysql.createConnection({
    host:"35.247.89.252",
    user:"root",
    password:"arlington",
    database:"cloud_project_db"
})

con.connect((err) => {
    if (!err)
        console.log('DB connection successful');
    else   
        console.log('DB connection failed : ' + JSON.stringify(err));
});