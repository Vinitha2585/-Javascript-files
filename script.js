// console.log("Hello, World!");


// Variable declarations

// var a=10;
// let b=20;
// const c=30;

// console.log(a,b,c);

// //string datatype

// let employeeid='113456';
// let employeename='Vinitha';
// let employeeage=25;

// console.log(employeeid,employeename,employeeage);

// //number datatype

// let num1=10;
// let num2=100
// let num3=25;
// let num4=89;

//console.log(num1+num2+num3+num4);

// //boolean datatype

// let islogin="True";
// let islog="false";

// console.log(islogin);

//operators//


//adition

// var a=10;
// let b=10;
// var c=40;
// const d=30;

// if(a==b && !  (c==d))
// {
// console.log("sucess");
// };

// (b==a) ? console.log("same value") : console.log("not smae");



// let test=(true  ? "pass" : "fail");

// console.log(test);

    


//subraction

// let c=400;
// let d=300;
// console.log(c-d);

//multiple

// let c=400;
// let d=300;
// console.log(c*d);



// Task-1

// var name="vinitha";
// let age=21;
// let course="B.com";
// const mark=350;
// let ispassed="true";

// console.log("name:",name);
// console.log("age:",age);
// console.log("course:",course);
// console.log("mark:",mark);
// console.log("ispassed:",ispassed);

// let total_mk="mark";
// let percentage_mark=mark/500 * 100;
// console.log("total mk",mark);
// console.log("percentage",percentage_mark);


// //Task-2

// let tamil=78;
// let english=90;
// let maths=67;
// let science=88;
// let social=87;

// let total_mark=(tamil+english+maths+science+social);
// let Average=(total_mark/5);
// let percentage=(total_mark/500 * 100);

// console.log("total mark",total_mark);
// console.log("Average",Average);
// console.log("percentage",percentage);

// if (total_mark <500 && (200<=500));
// {
//     console.log("pass");
// }


// //Task-3

// //global scope

// var name="anitha"

// console.log("name",name)

// // //function scope

// function studentdetail(){
//     let mark=30;
//     console.log("mark",mark);
// };
// studentdetail();

// // //block scope

// if(a=40);
// {
//  const a=20;
//  console.log(a);
// }
// console.log(a);


// //Task-4

// // //undefined
// console.log(a);
// var a = 10;

// // //reference error
// console.log(b);
// let b = 20;

// // //reference erroe
// console.log(c);
// const c = 30;

// // //function

// student();

// function student()
// {
//     let name="malathi";
//     console.log("name:",name);
// }


//Task-5

// let product_name="serum";
// let Product_price=1000;
// let quantity=5;
// let discount=20;
// let Tax_percentage=2;


// // //Arithmatic operator
// let total=(Product_price * quantity);

// let discound_amount=(total*discount/100);

// let tax_amount=(total*Tax_percentage/100);


// // //Assignment operator

// let final_amount=total;

// final_amount -= discound_amount;

// final_amount += tax_amount;

// // //comparision operator

// let premium = final_amount == 5000;
 

// // //Logical operator

// let valid_bill = quantity > 0 || Product_price > 0;

// // //Ternary operation

// let customer_type = premium ? "Premium Customer" : "Regular Customer";



// console.log("product name:",product_name);
// console.log("product price:",Product_price);
// console.log("quantity:",quantity);
// console.log("discount:",discount);
// console.log("Tax_percentage:",Tax_percentage);
// console.log("total:",total);
// console.log("Discound amount:",discound_amount);
// console.log("tax amount:",tax_amount);
// console.log("final amount:",final_amount);
// console.log("premium:",premium);
// console.log("valid_bill:",valid_bill);
// console.log("customer type:",customer_type)

// //Task-6

// let sum = 0;

// for (i=1;i<=50;i++)
// {

// if(i % 2==0)
// {
//     console.log(i,"even");
// }
// else
//     {
//     console.log(i,"odd");
// }

// if(i % 5==0)
// {
//     console.log(i,"divisable");
// }
// else
//     {
//     console.log(i,"not divisable");
// }
  
//   sum = sum + i;
// }
// console.log("total:",sum);

// //Task-7

// let username = "Raja";
// let password = "0987654321";

// let allow = 0;
// let attempt = 3;

// while (allow < attempt) {

// let user = "mala";
// let pass = "0987654321";

// if (user === username && pass === password) {

// console.log("Login Successful");
// break;

// } 
// else 
// {
// allow++;
// console.log("Invalid Username or Password");
// }
// }

// if (allow === attempt)
// {
// console.log("Account Locked");
// }


// // function expression
// let a=20;
// let b=40;

// function AddNumber(first,second){
//     console.log(first+second);
// }
// AddNumber(a,b);


//js

// var studentname={

//  name:"raj",
//  studentRegisternumber:"12000992299"

// };

// let studentmark={

//   Tamil:79,

//   English:56,

//   Maths:60,

//   Science:56,

//   social:90,

//   total:79+56+60+56+90
// };

// let average_mark=(studentmark.total/5);

// console.log("studentname" , studentname);

// console.log("studentmak",studentmark.total);

// console.log("Average mark",average_mark);

// if (studentmark.total < 200)
// {
//     console.log("fail");
// }
// else
// {
//     console.log("pass");
// }


// document.getElementById("result").innerHTML =
//         "Name: " + studentname.name + "<br>" +
//         "Register Number: " + studentname.studentRegisternumber + "<br>" +
//         "Total Mark: " + studentmark.total + "<br>" +
//         "Average Mark: " + average_mark;

// function calculateResult() {

//     var studentname = {

//         name: document.getElementById("name").value,

//         studentRegisternumber:
//         document.getElementById("register").value

//     };


//     let studentmark = {

//         Tamil: Number(document.getElementById("tamil").value),

//         English: Number(document.getElementById("english").value),

//         Maths: Number(document.getElementById("maths").value),

//         Science: Number(document.getElementById("science").value),

//         social: Number(document.getElementById("social").value),

//         total:
//         Number(document.getElementById("tamil").value) +
//         Number(document.getElementById("english").value) +
//         Number(document.getElementById("maths").value) +
//         Number(document.getElementById("science").value) +
//         Number(document.getElementById("social").value)

//     };


//     let average_mark = (studentmark.total / 5);


//     console.log("studentname", studentname);

//     console.log("studentmark", studentmark.total);

//     console.log("Average mark", average_mark);


//     if (studentmark.total < 200) {

//         console.log("fail");

//     }
//     else {

//         console.log("pass");

//     }


//     document.getElementById("result").innerHTML =

//         "Name: " + studentname.name + "<br>" +

//         "Register Number: " +
//         studentname.studentRegisternumber + "<br>" +

//         "Total Mark: " +
//         studentmark.total + "<br>" +

//         "Average Mark: " +
//         average_mark;
// }

//method

// const name="sridhar";

// //method-1
// console.log(`Hello `,name);

// //method-2
// console.log("Hello"+ " "+name);

// //method-3
// console.log(`Hello ${name}`);  //back tick and dolar


//Task-1(21/09/2026)

// var studentname={ 
 
//  name:" rajendar ",
// }; 
 
// let studentmark={ 
 
//   Tamil:79, 
 
//   English:56, 
 
//   Maths:60, 
 
//   Science:56, 
 
//   social:90, 
 
//   total:79+56+60+56+90 
// }; 
 
// var studentname2 = studentname.name.trim().toUpperCase();

// let percentage=(studentmark.total/500*100);

// let average_mark=(studentmark.total/5); 

// console.log(studentname2);

// console.log("studentmak",studentmark.total); 
 
// console.log("percentage",percentage + "%");

// console.log("Average mark",average_mark); 

// let finalgrade = (mark) => {

//     if (mark >= 450) {
//         return "Grade A";
//     }
//     else if (mark >= 350) {
//         return "Grade B";
//     }
//     else if (mark >= 300) {
//         return "Grade C";
//     }
//     else {
//         return "Fail";
//     }

// };

// console.log(finalgrade(studentmark.total));

//Task-2

// let username = " VINITHAJ  ";

// let username2 = username.trim();

// let username3=["vinithaj", "Raja", "Hello World", "mala", "abc"];

// let result = username3.includes("vinithaj");


// console.log(username2);
// console.log(username2.length);
// console.log(username2.toLowerCase());
// console.log(result);

// if (username2.length >= 5 && username2.length <= 15)
// {
//     console.log("Valid");
// }
// else if ( result == false)
// {
//     console.log("Invalid");
// }

//task-3

// let Account_holdername="brew";


// //check balance

// let amount=10000;
// function accountbalance(amount)
// {
//   return amount;
// }
// console.log("Account holdername:",Account_holdername);
// console.log("Account balance:",accountbalance(amount));

// //deposite amount

// let deposite_amount=2000
// function depositeamount(deposite_amount)
// {
//     return deposite_amount;
// }
// console.log("Deposite Amount:",depositeamount(deposite_amount));

// //withdrawal amount

// let withdrawal_amount=1000;

// function withdrawalamount(withdrawal_amount)
// {
// //if condition
// if (withdrawal_amount<= amount) 
// {
//    amount = amount - withdrawal_amount;
//    return withdrawal_amount;
// }
// else 
// {
//    return "Insufficient Balance";
// }
// }
// console.log("withdrawal Amount:",withdrawalamount(withdrawal_amount));


// //loop

// for(let i=1; i<3; i++)
// {
// if(i==1)
// {
//     console.log("balance:",accountbalance(amount));
// }
// else if(i==2)
// {
//     console.log("deposite:",depositeamount(deposite_amount));
// }
// else
// {
//     console.log("withdrawal:",withdrawalamount(withdrawal_amount));
// }
// }

//task-4

// let products = [

//     "iphone 15",

//     "Samsung Galaxy",

//     "OnePlus 12",

//     "Redmi Note 14"

// ];

// function searchProduct(search)

// {

// let searchText = search.trim().toLowerCase();

// for (let i = 0; i < products.length; i++)

// {

// if (products[i].toLowerCase().includes(searchText))

// {

// return products[i];

// }

// }

// return "Product Not Found";

// }

// const showProduct = (product) =>

// {

// console.log("Product Found:", product);

// };

// let search = "iphone";

// let searchResult = searchProduct(search);

// showProduct(searchResult);

//task-5

// let employees = [
// {
//         name: " maluthi ",
//         department: "IT",
//         basic: 30000,
//         hraPercent: 20,
//         daPercent: 10,
//         taxPercent: 5
// },
// {
//         name: " anushiya ",
//         department: "HR",
//         basic: 40000,
//         hraPercent: 25,
//         daPercent: 12,
//         taxPercent: 8
// },
// {
//         name: " ravi ",
//         department: "Finance",
//         basic: 50000,
//         hraPercent: 20,
//         daPercent: 15,
//         taxPercent: 10
// },
// {
//         name: " kavitha ",
//         department: "IT",
//         basic: 25000,
//         hraPercent: 18,
//         daPercent: 10,
//         taxPercent: 5
// },
// {
//         name: " vinitha ",
//         department: "Marketing",
//         basic: 60000,
//         hraPercent: 25,
//         daPercent: 15,
//         taxPercent: 10
// }
// ];

// // HRA
// function calHRA(basic, percent) {
//     return basic * percent / 100;
// }

// // DA
// const calDA = (basic, percent) => {
//     return basic * percent / 100;
// };

// // Gross Salary
// const calGross = (basic, hra, da) => {
//     return basic + hra + da;
// };

// // Tax - Function Expression
// const calTax = function(gross, percent) {
//     return gross * percent / 100;
// };

// // Net Salary
// function calNet(gross, tax) {
//     return gross - tax;
// }

// // Salary Category
// function salaryCategory(netSalary) {
//     if (netSalary >= 50000) {
//         return "High Salary";
//     } else if (netSalary >= 30000) {
//         return "Medium Salary";
//     } else {
//         return "Low Salary";
//     }
// }

// // Process 5 Employees
// for (let i = 0; i < employees.length; i++) {

// let emp = employees[i];

// let name = emp.name.trim();
// name = name.toUpperCase();

// let department = emp.department.toLowerCase();
// department = department.charAt(0).toUpperCase() + department.slice(1);

// let hra = calHRA(emp.basic, emp.hraPercent);
// let da = calDA(emp.basic, emp.daPercent);
// let gross = calGross(emp.basic, hra, da);
// let tax = calTax(gross, emp.taxPercent);
// let net = calNet(gross, tax);
// let category = salaryCategory(net);
//     console.log("Name       :", name);
//     console.log("Department :", department);
//     console.log("Basic      :", emp.basic);
//     console.log("HRA        :", hra);
//     console.log("DA         :", da);
//     console.log("Gross      :", gross);
//     console.log("Tax        :", tax);
//     console.log("Net Salary :", net);
//     console.log("Category   :", category);
// }

//task-1(23/09/2005)

// const student = {
//   name: "  arun kumar  ",
//   age: 21,
//   mark: 87.567,
//   course: "javascript"
// };

// const student2=student.name.trim().toUpperCase();
// const mark=student.mark;

// console.log(student2);
// console.log(mark.toFixed(2));

// for(let key in student)
// {
//     console.log(key, student[key]);
// }

// function studentgrade()
// {
//     if(50<100)
// {
//     return"grade A";
// }
// else
// {
//     return"grade B";
// }
// }
// console.log(studentgrade());


//task-2

// const employee = {
//     name: "  sarath kumar  ",
//     basicSalary: 30000,
//     hra: 3000,
//     da: 2000,
//     tax: 10
// };

// const calculateGross = (basic, hra, da) => {
//     return basic + hra + da;
// };

// const calculateTax = function (gross, percent) {
//     return gross * percent / 100;
// };

// const calculateNet = (gross, tax) => {
//     return gross - tax;
// };

// const grossSalary = calculateGross(
//     employee.basicSalary,
//     employee.hra,
//     employee.da
// );

// const taxAmount = calculateTax(grossSalary, employee.tax);

// const netSalary = calculateNet(grossSalary, taxAmount);

// employee.name = employee.name.trim().toUpperCase();

// console.log("Employee Name:", employee.name);
// console.log("Gross Salary:", grossSalary.toFixed(2));
// console.log("Tax Amount:", taxAmount.toFixed(2));
// console.log("Net Salary:", netSalary.toFixed(2));

// for (let key in employee) {
//     console.log(key);
// }

//task-3

// let product= [
// {
//     name: "iphone 15",
//     price: 69999.567,
//     category: "mobile",
//     stock: 10
// },

// {
//     name: "Samsung Galaxy",
//     price: 45999.456,
//     category: "mobile",
//     stock: 5
// },

// {
//     name: "OnePlus 12",
//     price: 54999.789,
//     category: "mobile",
//     stock: 0
// },

// {
//     name: "Redmi Note 14",
//     price: 24999.345,
//     category: "mobile",
//     stock: 8
// },

// {
//     name: "Vivo V30",
//     price: 32999.678,
//     category: "mobile",
//     stock: 3
// }
// ];


// let product2 = [
//     product[0].name.toUpperCase(),
//     product[1].name.toUpperCase(),
//     product[2].name.toUpperCase(),
//     product[3].name.toUpperCase(),
//     product[4].name.toUpperCase()
// ];

// let price = product[0].price;

// console.log(product2);

// console.log(price.toFixed(2));

// let stock = product[0].stock;

// if(stock > 0)
// {
//     console.log("available");
// }
// else
// {
//     console.log("unavailable");
// }
// for(let i in product)
// {
// for(let key in product[i])
// {
//     console.log(key, product[i][key]);
// }
// }
// function searchproduct(name)
// {
// for(let i = 0; i < product.length; i++)
// {
// if(product[i].name == name)
// {
// console.log(product[i]);
// return;
// }
// }
// console.log("product not found");
// }
// searchproduct("iphone 15");
// searchproduct("Redmi Note 14");

// //task-4

// let user={
//     name:"  parvathi  ",
//     email:"parvithara@gmail.com",
//     phone:7889543789,
//     age:19,
//     username:"PAR12"
// };

// let user2=user.name.trim();
// let user3=user.username.toLowerCase();
// console.log(user2);
// console.log(user3);

// if(user.email.includes,("@"))
// {
//    console.log("contain");
// }
// else
// {
//     console.log("not contain");
// }
// if(user.username.length >=5)
// {
//    console.log("username has at least 5 characters");
// }
// else
// {
//     console.log("username has  not at least 5 characters");
// }
// if(user.age < 18)
// {
//     console.log("not valid");
// }
// else{
//     console.log("valid");
// }
// for(let key in user)
// {
//     console.log(key, user[key]);
// }

// function finduser()
// {
// if(user.email.includes("@") && user.username.length >= 5 && user.age >= 18)
// {
//     return "Valid User";
// }
// else
// {
//     return "Invalid User";
// }
// }

// console.log(finduser());

//task-5

// const expenses = {
//   food: 450.50,
//   travel: 250,
//   shopping: 1299.99,
//   entertainment: 500
// };
// for(let key in expenses)
// {
//     console.log(key,expenses[key]);
// }
// let total_expenses=(expenses.food + expenses.travel + expenses.shopping + expenses.entertainment);
// console.log("Total expenses",total_expenses);


//task-1 Array method(25/09/26)

// let name=["ram","revathi","malathi","Reka","annamalai","priya","kumari","lashmi","tamizh","vinitha"]
// let size=name.length;
// console.log(size);

// name.push("jessy","mythili");//add value last
// console.log(name);

// name.unshift("kumar");//add value in starting
// console.log(name);

// name.pop();//delete the last name
// console.log(name);

// name.shift();//remove the starting name
// console.log(name);

// let acess=name.at(2);//acess the 3 name 
// console.log(acess);

// let find=name.toString();// convert the string
// console.log(find);

// console.log(name);//dispaly  all


//task-2

// const categories = [
//   "Electronics",
//   "Mobiles",
//   "Laptops",
//   "Fashion",
//   "Shoes",
//   "Books"
// ];

// const form=categories.slice(1,3);
// console.log(form);

// const pro=categories.splice(3,1 ,"Beauty", "Sports");
// console.log(pro);

// console.log(categories);

// let result=categories.join("-");
// console.log(result);

// let check= Array.isArray(categories);
// console.log(check);

//task-3

// const cart = ["Laptop", "Mouse", "Keyboard", "Headset"];
// cart.push("webcam");//add last
// console.log(cart);

// cart.unshift("USB Cable");//add first
// console.log(cart);

// cart.pop();//remove last
// console.log(cart);

// cart.shift();//remove first
// console.log(cart);

// let rel=cart.at(1);//run one of string in array
// console.log(rel);

// cart.splice(2,1,"Mechanical Keyboard");//replace keyboard to mechanical keyboard
// console.log(cart);

// let result=cart.join(" , ")
// console.log(result);

//task-4

// const sentence = "JavaScript is easy to learn and practice";
// let words = sentence.split(" ");
// console.log(words);

// let find=words.length;
// console.log(find);

// console.log(words.at(0));//he first and last words using at().
// console.log(words.at(-1));

// words.pop();//Remove the last word.
// console.log(words);

// words.push("daily");//Add a new word "daily" at the end.
// console.log(words);

// let final = words.join(" ");//Convert the final array back into a sentence using join(" ").
// console.log(final);

//task-5

// const employees = [
//   "Arun",
//   "Kumar",
//   "Priya",
//   "Sathish",
//   "Nirmala",
//   "Rahul",
//   "Divya"
// ];

// let size=employees.length;
// console.log(size);

// employees.push("ragav","malathi");
// console.log(employees);

// employees.shift();
// console.log(employees);

// employees.pop();
// console.log(employees);

// let con=employees.at(2);
// console.log(con);

// let result=employees.slice(1,4);
// console.log(result);

// employees.splice(1, 0, "ram");
// console.log(employees);

// let fun=employees.toString();
// console.log(fun);

// let pac=Array.isArray(employees);
// console.log(pac);

// let final = employees.join(" | ");
// console.log(final);



//task-1(30/09/2026)

// const marks = [78, 45, 92, 67, 34, 88, 56, 99, 72, 61];
// console.log(marks.length);

// let def=marks.includes(99);
// console.log(def);

// const find = marks.find((value, index, Array) => value > 90);
// console.log(find);

// const open=marks.filter((value) => value >60);
// console.log(open);

// const pop=marks.map((value) => value+5);
// console.log(pop);

// // Sort in ascending order
// const fill = marks.sort((a, b) => a - b);
// console.log(fill);

// marks.reverse();//reverse pannu
// console.log(marks);

// marks.forEach(value => console.log(value));


//task-2

// const electronics = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// const accessories = ["Headset", "Webcam", "USB Cable"];

// const com=electronics.concat(accessories);
// console.log(com);

// com.push("charger");
// console.log(com);

// com.pop();
// console.log(com);

// com.unshift("phone");
// console.log(com);

// com.shift();
// console.log(com);

// const find=com.includes("Laptop");
// console.log(find);

// const index=com.indexOf("Keyboard");
// console.log(index);

// const citrus=com.slice(0,3);
// console.log(citrus);

// let combine=com.join(" | ");
// console.log(combine);

// for(let comb of com){
//     console.log(comb);
// }

//task-3

// const employees = [
//   { name: "Arun", salary: 25000, department: "IT" },
//   { name: "Priya", salary: 35000, department: "HR" },
//   { name: "Kumar", salary: 45000, department: "IT" },
//   { name: "Divya", salary: 28000, department: "Sales" },
//   { name: "Rahul", salary: 55000, department: "IT" }
// ];

// employees.forEach((value) =>
// {
//     console.log(value);
// });

// //filter find greater than 30,000
// const salary=employees.filter((employee) => {
//     return employee.salary > 30000;
// });
// console.log(salary);


// // map get only names
// const names = employees.map((employee) => {
//     return employee.name;
// });

// console.log(names);

// //find

// const check=employees.find((employee) => {
//     return employee.salary > 40000;
// });
// console.log(check);


// employees.sort((a, b) => a.salary - b.salary);
// console.log(employees);


// if (employees.some((employee) => employee.name.includes("Rahul"))) {
//     console.log("Exists");
// } else {
//     console.log("Not Exists");
// }

// for (let employe of employees){
//     console.log(employe);
// }


// for (let employee of employees) {
//     const { name, salary } = employee;

//     console.log(name);
//     console.log(salary);
// }


//task-4

// const products = [
//   { name: "Laptop", price: 75000, stock: 5 },
//   { name: "Phone", price: 30000, stock: 12 },
//   { name: "Tablet", price: 25000, stock: 0 },
//   { name: "Watch", price: 5000, stock: 8 },
//   { name: "Headset", price: 2500, stock: 20 }
// ];

// const product=products.filter((product) => {
//     return product.stock > 0;
// });
// console.log(product);

// for (let product of products) {
//     if (product.price > 20000) {
//         console.log(product);
//     }
// }

// const names = products.map((products) => {
//     return products.name;
// });
// console.log(names);

// const check=products.find((products) => {
//     return products.price > 10000;
// });
// console.log(check);


// products.sort((a, b) => b.price - a.price);

// console.log(products);

//task-5

// const students = [
//   { name: "Arun", age: 21, mark: 85 },
//   { name: "Priya", age: 22, mark: 92 },
//   { name: "Kumar", age: 20, mark: 65 },
//   { name: "Divya", age: 21, mark: 48 },
//   { name: "Rahul", age: 23, mark: 76 }
// ];


// students.forEach((value)=>{
//     console.log(value);
// });

// students.map((value)=>{
//     console.log(value.name);
// });

// const pass=students.filter((student)=>{
//     return student.mark >= 50;
// });
// console.log(pass);

// const conc=students.find((student)=>{
//     return student.mark > 90;
// });
// console.log(conc);


// students.sort((a, b) => b.mark - a.mark);
// console.log(students);

// const check=students.slice(0,3);
// console.log(check);

// students.push({ name: "Anitha", age: 22, mark: 88 });
// console.log(students);

// students.pop();
// console.log(students);

// for(let student of students){
//     console.log(student);
// }

//task-1(01/01/2026)

// const movies = [
//   "Avengers",
//   "Interstellar",
//   "Inception",
//   "Titanic",
//   "Avatar"
// ];

// const movie=movies.length;
// console.log(movies);

// movies.push("The Dark", "The father");
// console.log(movies);

// movies.shift();
// console.log(movies);

// const fun=movies.includes("Avatar")
// console.log(fun);

// const use=movies.indexOf("Inception");
// console.log(use);

// const find=movies.slice(0,3);
// console.log(find);

// movies.sort();
// console.log(movies);

// movies.reverse();
// console.log(movies);

// for(let moviee of movies){
//   console.log(moviee);
// }

// const change=movies.join(" | ");
// console.log(change);


//task-2

// const courses = [
//   { name: "JavaScript", students: 45, price: 2500 },
//   { name: "React", students: 30, price: 3500 },
//   { name: "Node JS", students: 25, price: 4000 },
//   { name: "Python", students: 50, price: 3000 },
//   { name: "MongoDB", students: 20, price: 2000 }
// ];


// courses.map((value)=>{
//   console.log(value.name);
// });


// const pass=courses.filter((course)=>{
//   return course.students > 30;
// });
// console.log(pass);

// const conc=courses.find((course)=>{
//     return course.price > 3000;
// });
// console.log(conc);

// courses.sort((a, b) => a.price - b.price);
//    console.log(courses);

// courses.forEach((value)=>{
//   console.log(value);
// });

// for(let cour of courses){
//    console.log(cour.name);
// }

// const { name, price } = courses[0];

// console.log(name);
// console.log(price);

// courses.push({name: "java" ,students: 35, price:6500});
// console.log(courses);

//task-3

// const transactions = [
//   5000,
//   -1500,
//   2500,
//   -800,
//   3000,
//   -1200,
//   4500
// ];

// let find=transactions.length;
// console.log(find);


// const depo = transactions.filter((value) => value > 0);
// console.log(depo);

// const withdr = transactions.filter((value) => value < 0);
// console.log(withdr);

// const fir = transactions.find(value => value > 4000);
// console.log(fir);

// const all = transactions.sort((a, b) => a - b);
// console.log(all);

// transactions.forEach((value)=>{
//   console.log(value);
// });

// let total = 0;
// for (let transaction of transactions){
//    total = total + transaction;
// }
// console.log(total);

// const [first, second] = transactions;
// console.log(first);
// console.log(second);

//task-4

// const orders = [
//     { id: 101, customer: "Arun", item: "Pizza", amount: 450, status: "Delivered" },
//     { id: 102, customer: "Priya", item: "Burger", amount: 250, status: "Pending" },
//     { id: 103, customer: "Rahul", item: "Biryani", amount: 350, status: "Delivered" },
//     { id: 104, customer: "Divya", item: "Pasta", amount: 300, status: "Cancelled" },
//     { id: 105, customer: "Kumar", item: "Pizza", amount: 500, status: "Pending" }
// ];

// const del = orders.filter(order => order.status === "Delivered");
// console.log(del);


// const pen = orders.filter(order => order.status === "Pending");
// console.log(pen);


// const order = orders.find(order => order.id === 103);
// console.log(order);


// const customers = orders.map(order => order.customer);
// console.log(customers);

// const sortedOrders = orders.sort((a, b) => b.amount - a.amount);
// console.log(sortedOrders);


// orders.forEach(order => {
//     console.log(order);
// });


// let total = 0;
// for (let order of orders) {
//     total = total + order.amount;
// }
// console.log(total);

// const { customer, item, amount } = orders[0];
// console.log(customer);
// console.log(item);
// console.log(amount);


// const firstThree = orders.slice(0, 3);
// console.log(firstThree);

//task-5

// const players = [
//     { name: "Rohit", runs: 450, age: 32 },
//     { name: "Virat", runs: 620, age: 35 },
//     { name: "Rahul", runs: 380, age: 31 },
//     { name: "Hardik", runs: 290, age: 30 },
//     { name: "Surya", runs: 510, age: 29 }
// ];

// const names = players.map(player => player.name);
// console.log(names);


// const highRuns = players.filter(player => player.runs > 400);
// console.log(highRuns);


// const firstPlayer = players.find(player => player.runs > 500);
// console.log(firstPlayer);


// const sortedPlayers = players.sort((a, b) => b.runs - a.runs);
// console.log(sortedPlayers);


// players.forEach(player => {
//     console.log(player);
// });


// let totalRuns = 0;

// for (let player of players) {
//     totalRuns = totalRuns + player.runs;
// }

// console.log(totalRuns);


// const topThree = players.slice(0, 3);
// console.log(topThree);


// console.log(Array.isArray(players));


// const [first, second] = players;
// console.log(first);
// console.log(second);


// const { name, runs } = players[0];

// console.log(name);
// console.log(runs);

//task-1(05/10/2026)

// const seats = [
//   "A1", "A2", "A3", "A4", "A5",
//   "B1", "B2", "B3", "B4", "B5"
// ];

// seats.push("C1","C2");
// console.log(seats);

// seats.pop()
// console.log(seats);

// const find=seats.includes("A3");
// console.log(find);

// const index=seats.indexOf("B2");
// console.log(index);

// const slice=seats.slice(0,5);
// console.log(slice);

// seats.forEach(seat => {
//     console.log(seat);
// });

// let ana=seats.join(" | ");
// console.log(ana);

// const [seat1, seat2] = seats;
// console.log(seat1);
// console.log(seat2);

//task-2

// const orders = [
//   { item: "Pizza", price: 450, quantity: 2 },
//   { item: "Burger", price: 250, quantity: 3 },
//   { item: "Biryani", price: 350, quantity: 1 },
//   { item: "Pasta", price: 300, quantity: 2 },
//   { item: "Sandwich", price: 180, quantity: 4 }
// ];

// const ord=orders.map(order=>order.price);
// console.log(ord);

// const fil=orders.filter(order=>order.quantity>2);
// console.log(fil);

// const anal=orders.find(order=>order.price>400);
// console.log(anal);

// orders.forEach(order => {
//    console.log(order);
// });

// const text = orders.sort((a, b) => b.price - a.price);
// console.log(text);

// const [item, price] = orders;
// console.log(item);
// console.log(price);

// let total = 0;
// for (let order of orders){
//     total = total + order.price * order.quantity;
//  }
//  console.log(total);

 //task-3

//  const employees = [
//   { name: "Arun", score: 78 },
//   { name: "Priya", score: 92 },
//   { name: "Rahul", score: 65 },
//   { name: "Divya", score: 88 },
//   { name: "Kumar", score: 95 }
// ];


// const ord=employees.map(employee=>employee.name);
// console.log(ord);

// const wit=employees.filter(employee=>employee.score>80);
// console.log(wit);

// const ana=employees.find(employee=>employee.score>90);
// console.log(ana);

// const text = employees.sort((a, b) => b.score - a.score);
// console.log(text);

// const cit=employees.slice(1,3,4);
// console.log(cit);

//addEventListener
// const heading=document.getElementById('title');


// //click event
// const button=document.getElementById('button');
// console.log(button);
// button.addEventListener('click', () => console.log(heading.textContent));




// //change event
// const  input=document.getElementById('course');
// console.log(input);
// input.addEventListener('change', () => console.log(input.value));




// //input event
// const out=document.getElementById('name');
// console.log(out);
// // out.addEventListener('input',()=> console.log(out.value));

// out.addEventListener('change',()=> alert(out.value));



// //mouse event(mousemove)(mouseup)(Mousedown)(mouseout)(mousemove)(mouse enter)(mouseleave)
// const use=document.getElementById('text');
// console.log(use);
// use.addEventListener('mousedown',function(){
//     confirm("Are you sure to move the mouse");  
// });


// //task-1
// const img=document.getElementById('image');
// console.log(img);


// //Mouse image-க்குள் வரும்போது
// img.addEventListener('mouseenter',()=>img.src="img-3.jpg");

// //Mouse image-லிருந்து வெளியே போகும்போது
// img.addEventListener('mouseleave',() =>img.style.border = "5px solid red");


// //Mouse button-ஐ press செய்யும்போது
// img.addEventListener('mousedown',()=>img.style.border="6px solid yellow");

// // //Mouse move ஆகும்போது
// // img.addEventListener('mousemove',()=>img.style.border="3px solid green");

// //Mouse button-ஐ release செய்யும்போது
// img.addEventListener('mouseup',()=>img.style.border="3px solid purple");



// let arr = [];

// const input = document.getElementById('input');

// let isEdit=null;


// const button = document.getElementById("button");
// console.log(button);

//falsy value ethu koduthalum false varum

//0
//undefined
//null
//""
//false
//NAN

// function addValue() {
//  if(input.value==='')
//  {
//     alert("please Enter any value")
//     return;
//  }
//     if(isEdit !==null){
//         console.log('true');
//         arr[isEdit]=input.value;
//         isEdit=null;
//     }
    
//     else{
//         console.log('false');
//          arr.push(input.value);
//     }
//     input.value = '';
//     displayvalue();
// };

// function displayvalue() {
// const list = document.getElementById('list');
// list.innerHTML = '';//remove agidum
// arr.forEach((value, index) => {
// const element = document.createElement('li');
// element.innerHTML =`${value} <button onclick="handleupdate(${index})">Edit</button> <button onclick="handledelete(${index})">delete</button>`
// list.appendChild(element);
// });
// }


// function handleupdate(index){
//   console.log(arr[index]);
//   input.value=arr[index];
//   isEdit=index;
//   //arr[index]=test
//   //input.value=test
// }
// function handledelete(index){
//   arr.splice(index,1);
//   displayvalue();
// }

//upadate
// let index = 1;

// arr[index] = "value";

// console.log(arr);



// //delete
// arr.splice(index,1);
// console.log(arr);


// const name=document.getElementById('name');
// console.log(name);

// const phone=document.getElementById('phone')
// console.log(name);


// innerHTML=<button onclick="click()">EDIT</button>


// function click(){
//   console.log(name.value);
// }


//setTimeout

// console.log("start");

// console.log("User");

// console.log("details");

// setTimeout(()=>{
//   console.log("vinitha");
// },3000);

// console.log("end");

// //setInterval

// setInterval(()=>{
//   console.log("Hello every 2 second");
// },3000);


//promise
// const promise=new Promise((resolve,reject)=>{
//   let success=true;
//   if(success){
//     resolve("Fetch success");
//   }else{
//     reject("Something wrong");
//   };
// });
// console.log(promise);

// const promise=new Promise((resolve,reject)=>{
//   let success=false;
//   if(success){
//     resolve("Fetch success");
//   }else{
//     reject("Something wrong");
//   };
// });
// console.log(promise);


//try and catch
// const promise=new Promise((resolve,reject)=>{
//   let success=false;

//   try{
//     if(success){ //if(false)
//       resolve("Fetch success")
//   }else{
//     reject("Something wrong");
//     throw new Error("Try again")
//   };
// }catch(error){
//   console.log(error)
// };
// });

// console.log(promise);

//custom backend

//fetch('https://localhost:5001/products')
// //   .then(response => response.json())
//   .then(data => console.log(data));

//API Handling(Restfull API)

// fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err));



//aysnc await

// async function fetchProducts(){
//   try{
//   const response=await fetch('https://fakestoreapi.com/products');
//   const products=await response.json();
//   console.log(products);
// }catch(error){
//   console.log(error);
// }
// };

// fetchProducts()


//task-1(15/10/26)

// let arr = [];

// async function fetchProducts(){
//   try{
//   const response=await fetch('https://fakestoreapi.com/products');
//   arr=await response.json();  
//   console.log(arr);
//   handleView();

// }catch(error){
//   console.log(error);
// }
// };

// fetchProducts()


// function handleView() {
// let tbody = document.getElementById('tbody');
// tbody.innerHTML = '';

// arr.forEach((value, index) => {
// const tr = document.createElement('tr');

// tr.innerHTML = `
// <td>${value.title}</td>
// <td>${value.price}</td>
// <td>${value.category}</td>
// <td>${value.description}</td>`;

// tbody.appendChild(tr);

// });
// }


// //local storage la data store paniiruka(permanenta irukum)
// let name="vinitha";


// localStorage.setItem('username',name);


// //loacal storage la iruka data va js la get panrathu

// const username=localStorage.getItem('username')
// console.log(username);


// //remove panitum 

// localStorage.removeItem('username')



//session storage namalavey delete pannikulam chorm delet panaley poidum tab close panalum poidum
// let name="vinitha"

// sessionStorage.setItem('username',name)


// let A=[10,60]
// let b=[45,89]

// let c=A.concat(b);

// console.log(c);

// let A = [10, 89, 40];
// let b = [45, 89];
// let c = [];

// let k = 0;

// for (let i in A) {
//     c[k] = A[i];
//     k++;
// }

// for (let i in b) {
//     c[k] = b[i];
//     k++;
// }

// console.log(c);


// let A=[10,20,30];
// let B=[40,50,60]

// C=[...A,...B];

// console.log(C);


// let user={
//   name:"sri",
//   email:"vinithaj2005@gmail.com",
//   phone:"899889",

// }
// // user.addres="chennai"

// // // console.log(user)

// // console.log({...user,addres:"chennai"});

// //rest method

// const{name,...valueof}=user;
// console.log(name);
// console.log(valueof);


// //5.4 ? 5
// //5.7 ? 6

// let a = 5.4;

// console.log(Math.round(a)); // 5
// console.log(Math.floor(5.7)); // 5 point aprm value include panamata 
// console.log(Math.ceil(5.1));  // 6 (5.1 vathalum 6 nu tha kodukum)
// console.log(Math.max(10,20,60));
// console.log(Math.min(10,20,60));
// console.log(Math.random());

// console.log(parseInt(a));   // 5



//key:value

class user{
  constructor(name,age){  //key 
    this.name=name   
    this.age=age

    this.printvalue=function(){

      console.log(`user name:${this.name} \n age:${this.age}-> In constructor`)
      // return this.name

    }
    
  };

  display(){  
    console.log(`user name:${this.name} \n age:${this.age}`)
  }

  
  //function kodukama constructure la create panikulam
  // display(){  
  //   console.log(`user name:${this.name} \n age:${this.age}`)
  // }
};

const user1=new user("user1",25)
const user2=new user("user2",20);

// user1.printvalue();
user1.printvalue()
user2.display()


// console.log(user1.printvalue()===user2.printvalue());  //no value return agala so undefined undefined===undefined  (true)

// console.log(user1);






