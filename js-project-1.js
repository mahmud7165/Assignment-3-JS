/** Problem -01 ( Divide the Asset ) */
var area = 800;
var person = area / 2;
console.log("Output:", person);
// console.log("Karim:", person);

/** Problem -02 ( Cycle or Laptop ) */
var money = 100000;
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 30;
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i + " - medicine");
  } else {
    console.log(i + " - rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.pdf";
var extension = fileName.slice(-5);
if (
  fileName[0] === "#" ||
  extension.includes(".pdf") ||
  extension.includes(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

// Problem 05 - PH Email Generator
var student = { name: "jhanku", roll: 1014, department: "cse" };

var email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email);

// Problem 06 :  Current Salary ( Challenge Problem )

var startingSalary = 20000;
var experience = 5;
var currentSalary = startingSalary;
for (i = 1; i <= experience; i++) {
  currentSalary = currentSalary * 1.05;
}
currentSalary = currentSalary.toFixed(2);
console.log(currentSalary);
