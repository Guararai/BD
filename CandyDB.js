const { Console } = require('console')
const mysql=require ('mysql')

class CandyDB{

static connect (){
        const connection = mysql.createConnection({

            host:"localhost",
            user:"root",
            password:"",
            database:"candy"


        })
        connection.connect()
        return connection
    }

    static getCandies(callback){
        const connection = CandyDB.connect()
        let sql ="select * from candy"
        let query = connection.query(sql,function(err,results,fields){
            if(err)throw err
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }

}

module.exports = CandyDB