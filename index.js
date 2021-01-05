const express = require("express");

const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

const users = [{name:'shehla',email:'shehla@dd.com',password:'123654',id:1 }];

app.listen(PORT, (req, res) => {
  console.log("My first Server is running at port: ", PORT);
});

app.use(express.static(path.join(__dirname, "public")));

//===============================================================

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "registration", "signup2.html"));
});
app.post("/signup", (req, res) => {
    console.log(req.body);
    let {field1, field3,field5} = req.body
    let found = users.some((item)=>item.email == field3)
    if(found){
        res.send('<h1>user already exists, try another</h1>')
    }else{
    users.push({ name:field1, email:field3, password:field5, id:users.length+1});

    res.redirect('/signin')
}
})
//================================================================================

app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "registration", "signin.html"));
});
app.post("/signin", (req, res) => {
    let {field3,field5} = req.body
    let found = users.some((item)=>item.email==field3 && item.password==field5 )
    if(found){
        res.send('<h1>Welcome You are Logged in</h1>')
    }else{
        // res.send('<h1>password not matched</h1>')
        res.redirect('/signin')
    }
})

//=====================================================================
// 

// app.get("/all-users", (req, res) => {
//     res.send(users);
// });











// app.get('/', (req, res) => {
//     res.send("<h1>My First  Home Page</h1>")
// })

// app.get('/aboutus', (req, res) => {
//     res.send("This is about us Page")
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get('/aboutus', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public','aboutus.html'))
// })

// app.get('/contact',(req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'contact.html'))
// })
//https://www.sanwebe.com/2014/08/css-html-forms-designs
