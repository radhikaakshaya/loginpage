const mysql=require('mysql');
const env=require('dotenv').config()

const dbConfig=mysql.createConnection({
    host:'localhost',
    database:'userdb',
    user:process.env.User,
    password:process.env.PASSWORD
})
dbConfig.connect((error)=>{
    if(error) throw error
    console.log('Database connected successfully')
})

module.exports=dbConfig