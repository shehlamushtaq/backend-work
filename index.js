const express = require("express");

const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// const firebase = require("./firebase-config");

app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log("My first Server is running at port: ", PORT);
});

const users = [
  { name: "shehla", email: "shehla@dd.com", password: "123654", id: 1 },
];

app.use(express.static(path.join(__dirname, "public")));

//===============================================================

app.get("/signup", (req, res) => {
  console.log("path", path.join(__dirname));
  res.sendFile(path.join(__dirname, "registration", "signup2.html"));
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  let { field1, field3, field5 } = req.body;

  let found = users.some((item) => item.email == field3);
  if (found) {
    res.send("<h1>user already exists, try another</h1>");
  } else {
    users.push({
      name: field1,
      email: field3,
      password: field5,
      id: users.length + 1,
    });
    res.redirect("/signin");
  }
});

//================================================================================

app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "registration", "signin.html"));
});

app.post("/signin", (req, res) => {
  let { field3, field5 } = req.body;

  let found = users.some(
    (item) => item.email == field3 && item.password == field5
  );
  if (found) {
    //res.send("<h1>Welcome You are Logged in</h1>");
    res.sendFile(path.join(__dirname, "registration", "signin_success.html"));
  } else {
    // res.send('<h1>password not matched</h1>')
    // res.redirect("/signin");
    res.sendFile(path.join(__dirname, "registration", "signin_failure.html"));
  }
});

//=====================================================================================================
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(field3, field5)
//     .then((user) => {
//       console.log("saved to firebase");

//       res.redirect("/signin");
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(error);
//       res.send("<h1>user already exists, try another</h1>");
//     });
// });
//====================================================================================================
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(field3, field5)
//     .then((user) => {
//       console.log(user);
//       res.sendFile(path.join(__dirname, "registration", "signin_success.html"));
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       res.redirect("/signin");
//     });
// });

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
//===================================================================
