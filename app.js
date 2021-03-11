const express = require("express");
const path = require("path");
const fs = require("fs");
// const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const port = 80;

// ecpress specific
app.use('/static', express.static('static')) // For serving static files

//getting data from user and saving it in backend
app.use(express.urlencoded());
 
// pug specific
app.set('view engine', 'pug') // Set the template engine as pug


app.set('views', path.join(__dirname, 'views')) // Set the views directory

//enpoints like app.get
app.get('/', (req, res) => {
    const con = "this is best content on internete today";
    const params = {'title': 'pug is the best game', "content" :con}
    res.status(200).render('index.pug' , params);
});

app.post('/', (req, res) => {
   
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
     
    let outputToWrite = `the name of the client is,  ${name}, ${age}, ${gender}, ${address}, ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);

    const params = {'message': 'your form has been sent succesfully'}
    res.status(200).render('index.pug' , params);
});
//starting server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
