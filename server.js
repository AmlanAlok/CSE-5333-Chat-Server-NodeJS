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


server.listen(9000, () => {
    console.log('NodeJS server is running on port = 3000.');
    saveChatToDB(2, 1, "NodeJS-2");
});

function saveChatToDB(receiverUserId, senderUserId, message){

    console.log('Inside saveUserIdsToDB');

    var conversation_id;

    console.log('receiverUserId = ', receiverUserId);
    console.log('senderUserId = ', senderUserId);

    var timeStamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

    var mysqlInsertQuery = "INSERT INTO `chats` (`id`,`sender_id`,`receiver_id`,`message`,`message_timestamp`) VALUES (NULL, ?, ?, ?, ?);";

    chat_id = con.query(mysqlInsertQuery, [senderUserId, receiverUserId, message, timeStamp], function (err, result) {
        if(!err){
             return result.insertId;
        }
        else{
            console.log('DB connection failed : ' + JSON.stringify(err));
        }
    })

    return chat_id;
}