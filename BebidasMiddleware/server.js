var mysql = require('mysql');
var http = require('http');


var conn = mysql.createConnection({'host':'localhost','user':'root','password':'123','database':'Bebidas'});


var server = http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'application/json',"Access-Control-Allow-Origin":"http://localhost:4200"});

  con.query("SELECT * FROM Marcas",function(err,results,fields){
    res.write(results);
    console.log(results);
  });
  res.end();

})

server.listen(8080,function(err){
  if(err) throw err;
  console.log("Server up!");
});
