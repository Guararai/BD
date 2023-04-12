const CandyDB = require('./CandyDB')

CandyDB.getCandies(function(candy){

for(let i=0;candy.length > i;i++){
    console.log(candy[i].id+":"+candy[i].cname+":"+candy[i].ctype)
}

})
/*
create database candy
use candy;

create table candy(
id int auto_increment not null,
cname varchar   (60) null,
ctype varchar (30) null,
primary key (id)
    );

    insert into candy values
    (1,'Chimarrão','bebida'),
    (2,'Casca de Banana','fruta'),
    (3,'Película de Celular Quebrada','doce'),

    select*from candy;
    
    */