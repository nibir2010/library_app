const fs = require('fs');
const express = require('express');
const bodyParser  = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.post('/addNewBook',(req,res)=>{
	let allBooks = JSON.parse(fs.readFileSync('booklist.json'));
	let data = [{
			"id": +(allBooks[allBooks.length - 1]["id"]) + 1,
			"name": req.body.name,
		    "description": req.body.description,
		    "author": req.body.author,
		    "completed": false
		}]
	let _books = [...allBooks,...data];
	fs.writeFile('booklist.json',JSON.stringify(_books),(err)=>{
		if(err){
			throw new Error(err)
		}	
		res.send(JSON.stringify(_books));
	})
})

app.post('/editBook',(req,res)=>{
	let allBooks = JSON.parse(fs.readFileSync('booklist.json'));
	let data = {
			"id": req.body.id,
			"name": req.body.name,
		    "description": req.body.description,
		    "author": req.body.author,
		    "completed": false
		};
	let _books = allBooks.map(eachBook=>{
		return eachBook.id === data.id ? {...eachBook,...data} : {...eachBook} 
	});
	fs.writeFile('booklist.json',JSON.stringify(_books),(err)=>{
		if(err){
			throw new Error(err)
		}	
		res.send(JSON.stringify(_books));
	})
})

app.listen(3001,()=>{
	console.log("server is running at port 3001");
});