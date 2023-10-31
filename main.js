// arithmetic operators
// addition

var a=10+23;
console.log(a);
console.log(typeof a)

var a=10+"23";
console.log(a);
console.log(typeof a)

var a=10+true;
console.log(a);
console.log(typeof a)

var a=10+false;
console.log(a);
console.log(typeof a)

var a=10+23+"arun";
console.log(a);
console.log(typeof a)

var a=10+"arun"+100;
console.log(a);
console.log(typeof a)

var a=10+23+"arun"+true;
console.log(a);
console.log(typeof a)

var a=10+23+true+"arun";
console.log(a);
console.log(typeof a)

// subtraction
var x=100-40;
console.log(x);
console.log(typeof x)

var x=100-40-"arun"-true;
console.log(x);
console.log(typeof x)

var x=100-40-true-"arun";
console.log(x);
console.log(typeof x)

var x=100-40-true;
console.log(x);
console.log(typeof x)

var x=100-40-"1";
console.log(x);
console.log(typeof x)

var x=100-40-false;
console.log(x);
console.log(typeof x)

var x=true-100-40-true;
console.log(x);
console.log(typeof x)

// multiplication

var q=10*10;
console.log(q);
console.log(typeof q)

var q=10*10*true;
console.log(q);
console.log(typeof q)

var q=10*true;
console.log(q);
console.log(typeof q)

var q=10*10*"welcome";
console.log(q);
console.log(typeof q)

var q=10*10*"20";
console.log(q);
console.log(typeof q)

var q=10*10*false;
console.log(q);
console.log(typeof q)

// division
var q=50/2;
console.log(q);
console.log(typeof q)

var q=50/2/"arun";
console.log(q);
console.log(typeof q)

var q=50/2/"3";
console.log(q);
console.log(typeof q)

var q=50/true;
console.log(q);
console.log(typeof q)

var q=50/false;
console.log(q);
console.log(typeof q)

var q=50/3;
console.log(q);
console.log(typeof q)

// module
var q=50%3;
console.log(q);
console.log(typeof q)

var q=10%3;
console.log(q);
console.log(typeof q)

var q=10%"3";
console.log(q);
console.log(typeof q)

var q=10%"arun";
console.log(q);
console.log(typeof q)

// logical operator

var a=30&&(30!==30);
console.log(a);

var a=30&&(30!=="30");
console.log(a);

var a=30&&(30==30)&&true;
console.log(a);

var a=30||(30!==30);
console.log(a);

var a=(10>20)||(20>10);
console.log(a);

var a=30&&(30!==30)
console.log(a);

var a=30;
a++;
console.log(a);

var a=30;
++a;
console.log(a);


var a=30;
a--;
console.log(a);
