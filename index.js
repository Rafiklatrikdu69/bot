var Discord = require("discord.js");
const mysql = require('mysql');
const db  = mysql.createConnection({
host: 'localhost',
user: 'root',
port: 3306,
password: '',
database: 'dis'
});
var Client = new Discord.Client({intents :[]})

Client.on('message' , async message =>{
   
console.log(message.author.id);

db.query(`insert into message (id_user,message) values ("${message.author.id}", "${message}")`);
});


Client.login("OTUwMDE2NDY5MjkzNDkwMjM3.GH5BAy.GXkCuGcNlqduS21bcwsHZvk_5R3VticcfjTAfE");




