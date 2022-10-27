// Imports
const express = require("express");
const app = express();
const port = 3000;
// const shell = require("shelljs");
const bodyParser = require("body-parser");
var child_process = require("child_process");
const shell = require("await-shell");

const shell = createShell();

let someField1 = "";
let someField2 = "";

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
// app.use(bodyParser.json());

// Set Views
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
/* 
// index page
app.get("/", function (req, res) {
  res.render("index");
});

// about page
app.get("/about", function (req, res) {
  res.render("about");
});

 */
app.get("", (req, res) => {
  res.render("index", { text: "This is EJS" });
});

app.get("/about", (req, res) => {
  res.render("about", { text: "About Page" });
});

// app.post("/", function (req, res) {
//   someField1 = req.body.avatar;
//   someField2 = req.body.lname;
// });

// shell.echo(someField1, someField2);
const scriptPath =
  "/home/jadeye//Downloads/A-p-by-Face-R-and-E-blink-detection/";
// shell.cd(scriptPath);
const pyFile = "attendence_project.py";
// let py = "";
// async function launchScript() {
//   if (shell.which("python")) {
//     py = shell.which("python");
//     // shell.echo(shell.exec(py + " " + pyFile));
//     shell.exec(py + " " + pyFile);
//     shell.exit(0);
//   }
// }

async function launchScript() {
  await shell.run(`/usr/bin/python ${scriptPath}${pyFile}`);
}

/* 
shell.echo("Py is: " + shell.which("python"));PythonShell

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
} else {
  shell.echo("git: " + shell.which("git"));
}

 */ //  Listen on port 3000
const startServer = async () => {
  await app.listen(port, () => console.info(`Listening on port ${port}`));
};

const main = async () => {
  await startServer();
  await launchScript();
};

main();
// shell.exec(py + " " + pyFile);
