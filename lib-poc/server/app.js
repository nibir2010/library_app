const fs = require('fs');
const express = require('express');
let app = express();


// fs.writeFile('booklist.json',JSON.stringify(obj),(err)=>{
// 	if(err){
// 		throw new Error(err)
// 	}
// })


app.get('/getBookList',(req,res)=>{

	fs.readFile('booklist.json',(err,data)=>{
		if(err){
			throw new Error(err)
		}	
		res.send(JSON.parse(data));
	})
})

// app.get('/addNewBook',(req,res)=>{

// 	fs.readFile('booklist.json',(err,data)=>{
// 		if(err){
// 			throw new Error(err)
// 		}	
// 		res.send(JSON.parse(data));
// 	})
// })

app.listen(3001,()=>{
	console.log("server is running at port 3001");
});