// ==========================================
// 1. let, const, var
// ==========================================

var schoolName = "ABC Higher Secondary School";

let studentCount = 100;

const maximumMark = 500;


// ==========================================
// 2. String, Number, Boolean
// ==========================================

let studentName = "Raj";       // String

let totalMark = 350;           // Number

let isStudent = true;          // Boolean


console.log("School:", schoolName);
console.log("Student Count:", studentCount);
console.log("Maximum Mark:", maximumMark);

console.log(typeof studentName);
console.log(typeof totalMark);
console.log(typeof isStudent);


// ==========================================
// 3. Global Scope
// ==========================================

let globalMessage = "Student Result System";

function showGlobalMessage() {

    console.log(globalMessage);

}

showGlobalMessage();


// ==========================================
// Block Scope
// ==========================================

if (true) {

    let blockMessage = "Inside Block";

    const blockNumber = 100;

    console.log(blockMessage);
    console.log(blockNumber);

}


// blockMessage cannot be accessed outside the block
// console.log(blockMessage);


// ==========================================
// 4. Hoisting Small Example
// ==========================================

console.log(hoistedVariable);

var hoistedVariable = "This is Hoisting Example";


// let and const are not accessible before declaration
// console.log(testLet);
// let testLet = 10;


// ==========================================
// 5. Normal Function
// Total Calculation
// ==========================================

function calculateTotal(marks) {

    var total = 0;

    for (var i = 0; i < marks.length; i++) {

        total = total + marks[i];

    }

    return total;
}


// ==========================================
// 6. Function with Parameters
// Grade Calculation
// ==========================================

function calculateGrade(average) {

    if (average >= 90) {

        return "A+";

    }

    else if (average >= 80) {

        return "A";

    }

    else if (average >= 70) {

        return "B";

    }

    else if (average >= 60) {

        return "C";

    }

    else if (average >= 50) {

        return "D";

    }

    else {

        return "F";

    }
}


// ==========================================
// 7. Return Function
// Average Calculation
// ==========================================

function calculateAverage(total, numberOfSubjects) {

    return total / numberOfSubjects;

}


// ==========================================
// 8. Arrow Function
// Result Status
// ==========================================

const resultStatus = (average) => {

    if (average >= 35) {

        return "PASS";

    }

    else {

        return "FAIL";

    }

};


// ==========================================
// 9. Switch Case
// Grade Message
// ==========================================

function gradeMessage(grade) {

    let message;

    switch (grade) {

        case "A+":
            message = "Excellent Performance!";
            break;

        case "A":
            message = "Very Good Performance!";
            break;

        case "B":
            message = "Good Performance!";
            break;

        case "C":
            message = "Average Performance!";
            break;

        case "D":
            message = "Need More Improvement!";
            break;

        case "F":
            message = "Better luck! Work harder.";
            break;

        default:
            message = "Invalid Grade";

    }

    return message;
}


// ==========================================
// 10. Button Click
// ==========================================

const calculateButton = document.getElementById("calculateBtn");


calculateButton.addEventListener("click", function () {


    // ======================================
    // Get Student Details
    // ======================================

    studentName = document.getElementById("studentName").value;

    let registerNumber =
        document.getElementById("registerNumber").value;


    // ======================================
    // Get 5 Subject Marks
    // ======================================

    const markInputs = document.querySelectorAll(".mark");

    let marks = [];


    // ======================================
    // Loop - Process 5 Subjects
    // ======================================

    for (let i = 0; i < markInputs.length; i++) {

        let mark = Number(markInputs[i].value);

        marks.push(mark);

    }


    // ======================================
    // Validation
    // ======================================

    if (studentName === "" || registerNumber === "") {

        alert("Please enter student name and register number.");

        return;

    }


    // ======================================
    // Check Marks
    // Operators: >= && ||
    // ======================================

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 0 || marks[i] > 100) {

            alert("Each subject mark must be between 0 and 100.");

            return;

        }

    }


    // ======================================
    // Total
    // ======================================

    let total = calculateTotal(marks);


    // ======================================
    // Average
    // ======================================

    let average = calculateAverage(total, 5);


    // ======================================
    // Grade
    // ======================================

    let grade = calculateGrade(average);


    // ======================================
    // Pass / Fail
    // ======================================

    let status = resultStatus(average);


    // ======================================
    // Switch Case Message
    // ======================================

    let message = gradeMessage(grade);


    // ======================================
    // Display Result
    // ======================================

    document.getElementById("displayName").textContent =
        studentName;

    document.getElementById("displayRegister").textContent =
        registerNumber;

    document.getElementById("displayTotal").textContent =
        total;

    document.getElementById("displayAverage").textContent =
        average.toFixed(2);

    document.getElementById("displayGrade").textContent =
        grade;


    // ======================================
    // Result Status Display
    // ======================================

    const statusBox = document.getElementById("statusBox");

    statusBox.textContent = status;

    statusBox.className = "";

    if (status === "PASS") {

        statusBox.classList.add("pass");

    }

    else {

        statusBox.classList.add("fail");

    }


    // ======================================
    // Grade Message
    // ======================================

    document.getElementById("gradeMessage").textContent =
        message;


    // ======================================
    // Show Result Section
    // ======================================

    document.getElementById("resultSection").style.display =
        "block";


});