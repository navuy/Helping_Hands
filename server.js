const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/sayHai", (req, res) => {
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");

  res.json({ status:true, message: "hello ng greetings" });
});
app.get("/add", (req, res) => {
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  let a=parseInt(req.query.num1);
  let b=parseInt(req.query.num2);
  let c=a+b;
  res.json({ status:true, message: "i done it",res:c });
});

// MongoDB connection setup
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Connect to the MongoDB server
async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB server');
    } catch (err) {
        console.error('Error connecting to MongoDB server', err);
        process.exit(1);
    }
}


app.get("/sayHai", (req, res) => {
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  data={ status:true,message: "Hello Guest" };
  res.json(data);
});

app.get('/insertHelper', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('helper');
	const result1 = await collection.findOne({email:req.query.email});
	if(!result1){
        const result = await collection.insertOne(req.query);
        data={ status:true,message: "Registered Successfully" };
		res.json(data);
	}
	else
	{
		data={ status:true,message: "Email Already Exist" };
		res.json(data);
	}
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
		res.json(data);
    }
});
app.get('/insertNeedy', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('needy');
	const result1 = await collection.findOne({email:req.query.email});
	if(!result1){
        const result = await collection.insertOne(req.query);
        data={ status:true,message: "Registered Successfully" };
		res.json(data);
	}
	else
	{
		data={ status:true,message: "Email Already Exist" };
		res.json(data);
	}
		
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
		res.json(data);
    }
});

app.get("/add", (req, res) => {
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  let a=parseInt(req.query.num1);
  let b=parseInt(req.query.num2);
  let c=a+b;
  res.json({ status:true, message: "i done it",res:c });
});

app.get('/login', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const coll=db.collection('needy');		
	var result1=await coll.findOne(req.query,{projection:{_id:0,name:1,password:1}});
	const coll1=db.collection("helper");
	var result2=await coll1.findOne(req.query,{projection:{_id:0,fname:1,password:1}});
	const coll3=db.collection("admin");
	var result3=await coll3.findOne(req.query,{projection:{_id:0,mail:1,password:1}});
	console.log(req.query);
	if(result1) {
		data={ status:true,message: "Successfully found the needy",user:1 };
		res.json(data);
		
	}
	else if(result2) {
		data={ status:true,message: "Successfully found the helper",user:2 };
		res.json(data);
	}
	else if(result3) {
		data={ status:true,message: "Successfully found the admin",user:3 };
		res.json(data);
	}
	else{

		data={ status:false,message: "User not found" };
	}
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});

app.get('/findNeedy', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('Needy');		
        const result = await collection.find({},{name:1,_id:0,email:1}).toArray();
		data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});


app.get('/findPosts', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('post');		
        const result = await collection.find({},{_id:0,email:1,description:1,oname:1}).toArray();
		data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});

app.get('/createPost', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('post');
        const result = await collection.insertOne(req.query);
        data={ status:true,message: "Inserted Successfully" };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
		res.json(data);
    }
});


app.get('/updateAmount', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('needy');
		const filter={email:req.query.email};
	if(req.query.amount==""){
		req.query.amount="0"
	}
	var value = parseInt(req.query.amount);
	console.log(value);
        const result = await collection.updateOne(filter,{$inc:{amount:value}});
	const collection1=db.collection('helper');
		const filter1={email:req.query.email1};
        const result1 = await collection1.updateOne(filter1,{$inc:{amount:-value}});
	
	
		if(result.modifiedCount>0 && result.modifiedCount>0)
			data={ status:true,message: "Updated Successfully",noOfDoc:result.modifiedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.modifiedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "update action failed" };
		res.json(data);
    }
});


app.get('/findBalance', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('helper');		
        const result = await collection.findOne(req.query,{_id:0,amount:1});
		data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});
app.get('/findBalanceNeedy', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('needy');		
        const result = await collection.findOne(req.query,{_id:0,amount:1});
		data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});


app.get('/deleteNeedy', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('needy');
        const result = await collection.deleteOne(req.query);
		if(result.deletedCount>0)
			data={ status:true,message: "deleted Successfully",noOfDoc:result.deletedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.deletedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "delete action failed" };
		res.json(data);
    }
});


app.get('/deleteHelper', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('helper');
        const result = await collection.deleteOne(req.query);
		if(result.deletedCount>0)
			data={ status:true,message: "deleted Successfully",noOfDoc:result.deletedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.deletedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "delete action failed" };
		res.json(data);
    }
});


app.get('/findUser', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('needy');		
        const result = await collection.find({},{_id:0,email:1,oname:1,amount:1}).toArray();
	const collection1=db.collection('helper');		
        const result1 = await collection1.find({},{_id:0,email:1,fname:1,amount:1}).toArray();
		data={ status:true,message: "Successfully find the docs",list:result,list1:result1 };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});


app.get('/deletePost', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('post');
        const result = await collection.deleteOne(req.query);
		if(result.deletedCount>0)
			data={ status:true,message: "deleted Successfully",noOfDoc:result.deletedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.deletedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "delete action failed" };
		res.json(data);
    }
});

app.get('/deletePostByEmail', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('post');
        const result = await collection.deleteMany(req.query);
		if(result.deletedCount>0)
			data={ status:true,message: "deleted Successfully",noOfDoc:result.deletedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.deletedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "delete action failed" };
		res.json(data);
    }
});


app.get('/recharge', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('helper');
		const filter={email:req.query.email};
	if(req.query.amount==""){
		req.query.amount="0"
	}
	var value = parseInt(req.query.amount);
	console.log(value);
        const result = await collection.updateOne(filter,{$inc:{amount:value}});
	
		if(result.modifiedCount>0 )
			data={ status:true,message: "Updated Successfully",noOfDoc:result.modifiedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.modifiedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "update action failed" };
		res.json(data);
    }
});

app.get('/findPostsByEmail', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('post');		
        const result = await collection.find(req.query,{_id:0,email:1,description:1,oname:1}).toArray();
		data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});

app.get('/contribute', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('contribution');
	if(req.query.amount==""){
		req.query.amount="0"
	}
        const result = await collection.insertOne(req.query);
        data={ status:true,message: "Inserted Successfully" };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
		res.json(data);
    }
});

app.get('/findContributionsByEmail', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('contribution');		
        const result = await collection.find(req.query,{_id:0,oemail:1,email:1,pname:1,amount:1}).toArray();
		data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});


app.get('/findContributionsByEmail1', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('HelpingHandsDb');
        const collection=db.collection('contribution');		
        const result = await collection.find(req.query,{_id:0,oemail:1,email:1,pname:1,amount:1}).toArray();
		data={ status:true,message: "Successfully find the docs",list:result };
		res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
		res.json(data);
    }
});


// Start the server 
app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
	connect(); // Connect to MongoDB when the server starts
});
