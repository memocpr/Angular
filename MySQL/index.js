var Express = require("express")
var bodyParser = require("body-parser");
const { request, response } = require("express");

var app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(49146, () => {
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to DB ...!')
    })
});

app.get('/', (request, response) => {
    response.send('Hello Word...!');
})

var cors = require('cors');
app.use(cors());

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'digilab'
})

// file upload

var fileUpload = require('express-fileupload');
var fs = require('fs');
app.use(fileUpload());
app.use('/Photos', Express.static(__dirname + '/Photos'));


// CRUD operators for Department table

app.get('/api/Department', (req, res) => {

    var query = `SELECT * FROM digilab.Department`;

    connection.query(query, (err, rows) => {
        if (err) {
            res.send('Failed...!');
        }
        res.send(rows);
    })
})


app.post('/api/Department', (req, res) => {

    var query = `INSERT into digilab.Department (DepartmentName) VALUE(?)`;

    var values = [req.body['DepartmentName']]

    connection.query(query, values, (err) => {
        if (err) {
            res.send('Failed...!');
        }
        res.json('Added Successfully...!');
    })
})


app.put('/api/Department', (req, res) => {

    var query = `UPDATE digilab.Department set DepartmentName=? where DepartmentId=?`;

    var values = [
        req.body['DepartmentName'],
        req.body['DepartmentId']
    ];

    connection.query(query, values, (err) => {
        if (err) {
            res.send('Failed...!');
        }
        res.json('Updated Successfully...!');
    })
})


app.delete('/api/Department/:id', (req, res) => {

    var query = `DELETE from digilab.Department where DepartmentId=?`;

    var values = [
        parseInt(req.params.id)
    ];

    connection.query(query, values, (err) => {
        if (err) {
            res.send('Failed...!');
        }
        res.json('Deleted Successfully...!');
    })

})


// CRUD operators for employee table

app.get('/api/employee', (req, res) => {

    var query = `SELECT * FROM digilab.Employee`;

    connection.query(query, (err, rows) => {
        if (err) {
            res.send('Failed...!');
        }
        res.send(rows);
    })
})


app.post('/api/employee', (req, res) => {

    var query = `INSERT into digilab.Employee 
    (EmployeeName, Department, DateOfJoining, PhotoFileName) 
    VALUE(?,?,?,?)`;

    var values = [
        req.body['EmployeeName'],
        req.body['Department'],
        req.body['DateOfJoining'],
        req.body['PhotoFileName']
    ]

    connection.query(query, values, (err, rows, fields) => {
        if (err) {
            console.log(err);
            return res.send('Failed...!');
        }
        res.json('Added Successfully...!');
    })
})


app.put('/api/employee', (req, res) => {

    var query = `UPDATE digilab.Employee 
    set EmployeeName=?, Department=?, DateOfJoining=?, PhotoFileName=?
    where EmployeeId=?`;

    var values = [
        req.body['EmployeeName'],
        req.body['EmployeeId'],
        req.body['Department'],
        req.body['DateOfJoining'],
        req.body['PhotoFileName']
    ];

    connection.query(query, values, (err) => {
        if (err) {
            res.send('Failed...!');
        }
        res.json('Updated Successfully...!');
    })
})


app.delete('/api/employee/:id', (req, res) => {

    var query = `DELETE from digilab.Employee where EmployeeId=?`;

    var values = [
        parseInt(req.params.id)
    ];

    connection.query(query, values, (err) => {
        if (err) {
            res.send('Failed...!');
        }
        res.json('Deleted Successfully...!');
    })

})

// post request for photo upload

app.post('/api/employee/savefile', (req, res) => {

    fs.writeFile("./Photos/" + req.files.file.name,
        req.files.file.data, (err) => {
            if (err) {
                return console.log(err);
            }
            res.json(req.files.file.name);
        })
})