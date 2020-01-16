/* RUN APP 
node app
Run in browser: http://localhost:3000/

ADD: "server": "nodemon app.js" under scripts in package.json
RUN nodemon:  npm run server
Start: node app
*/
/* IMPORTS */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

// CONNECT TO DB
mongoose.connect("mongodb+srv://rebecca:sockersweet92@cluster0-knlvj.azure.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } );


const Bookings = require("./app/models/bookingService.js");
// NEW INSTANCE OF EXPRESS 
const app = express();

app.all('/*', function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type,CORELATION_ID");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    next();
});


// BODY PARSER
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// CREATE STATIC PATH
app.use(express.static(path.join(__dirname, 'public')));

// SERVE STATIC ASSETS IF IN PRODUCTION
if(process.env.NODE_ENV === 'production'){
    //SET STATIC FOLDER

    app.use(express.static('project/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'project','build', 'index.html'))
    })
}


// REST-API, SEND ALL BOOKINGS
app.get("/api/booking", function(req, res){
    Bookings.find(function(err, Bookings){
    if(err){
    res.send(err);
}
res.json(Bookings);

});
});

// REST-API, SEND BOOKINGS WITH SPECIFIC ID
app.get("/api/booking/:_id", function(req, res){
 const currentId = req.params._id;
 Bookings.find(
    { "_id" : currentId},
     function(err, Bookings){
    if(err){
    res.send(err);
}
res.json(Bookings);
});
})
// REST-API, SEND BOOKINGS WITH SPECIFIC EMAIL
app.get("/api/bookingByEmail/:email", function(req, res){
    const currentEmail = req.params.email;
    Bookings.find(
       { "email" : currentEmail},
        function(err, Bookings){
       if(err){
       res.send(err);
   }
   res.json(Bookings);
   });
   })
// REST-API, ADD BOOKINGS
app.post("/api/booking/add", function(req, res){

    // NEW INSTANCE OF COURSES
    const bookTable = new Bookings();
    // CREATE NEW OBJECT 

    bookTable.name= req.body.name;
    bookTable.number= req.body.number;
    bookTable.date= req.body.date;
    bookTable.time= req.body.time;
    bookTable.email= req.body.email;
    bookTable.table= req.body.table;

    // SAVE COURSE AND WRITE ERROR MESSAGES
    bookTable.save(function(err){
        if(err){
            res.send(err)
        }
    });
     res.send(req.body);
   res.redirect("/");
});
// REST-API, DELETE BOOKINGS
app.delete("/api/booking/delete/:_id", function(req, res){
    const deleteId = req.params._id;
    Bookings.deleteOne({
    _id: deleteId
},function(err, Bookings){
    if(err){
        res.send(err);
    }
    res.json({message: "Bokning raderad"})
});

})
// UPDATE COURSE
app.put("/api/booking/update/:_id", function(req, res){
    const currentId = req.params._id;

    const updateBooking = {
      
        number: req.body.number,
        date: req.body.date,
        time: req.body.time,
      
        table: req.body.table
    }
    
    Bookings.updateOne({
        "_id": currentId},
        {$set : updateBooking
       
    },function(err, Bookings){
        if(err){
            res.send(err);
        }
        res.json({message: "Bokning uppdaterad"})
    }); 
})


//INITIATE PORT
let port = 3001;
// START SERVER 
app.listen(port, function(){
console.log("Server started at port 3000")
})