const fs = require("fs");

// CRUD OPERATIONS
// 1) CREATE
fs.writeFile(
  "employees.json",
  '{ "name": "Employee 1 Name", "salary": 2000,',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File has been created.");
    }
  }
);

// 2) READ
fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 3) UPDATE
fs.appendFile("employees.json", ' "role": "Backend developer"}', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File has been updated.");
  }
});

// 4) DELETE
fs.rm("employees.json", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File has been deleted.");
  }
});
