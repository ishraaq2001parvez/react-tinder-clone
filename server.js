import express from "express";
import mongoose from "mongoose";
import Cors from 'cors'
import Cards from './dbCards.js'
// App Config
const app = express();
const port = process.env.PORT || 8001;

const mongodb_password = "QbyJ4SYC9CJ41Wzy";

const connectionUrl = `mongodb+srv://admin:${mongodb_password}@cluster0.q9oef.mongodb.net/clone-db?retryWrites=true&w=majority`;

// MiddleWare
app.use(express.json())
app.use(Cors())
// Db Config

mongoose.connect(connectionUrl);
// Api endpoints

app.get("/", (request, response) => {
	console.log("port accessed");
	response.status(200).send("<h1>Hello boys!</h1>");
});
app.post('/tinder/cards', (req,res)=>{
	const dbCard = req.body;
	Cards.create(dbCard,(err,data)=>{
		if(err){
			res.status(500).send(err)
		}
		else{
			res.status(201).send(data);
		}
	})
})


app.get('/tinder/cards',(req,res)=>{
	const dbCard = req.body;
	Cards.find(dbCard,(err,data)=>{
		if(err){
			res.status(500).send(err)
		}
		else{
			res.status(200).send(data);
		}
	})
})
// Listener
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
