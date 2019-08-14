/**************************************
 * Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
console.log(y3ears);


/**************************************
 * Variables mutation and type correction
*/
/*
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty ieght';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt ('What is his last Name?');
console.log(lastName);


/******************************
 * Basic opetators
 */
/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark');
var x;
console.log(typeof x);

/******************************
 * Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3+5)*4-6; 
console.log(x,y);

x *= 2;
x++; 

/*************************
 * CODING CHALLENGE 1
*/
/*
var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var isMarkBigger = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBigger );

/*************************
 * If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' hopefully will marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' hopefully will marry soon :)');
}

/*************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >=20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

/*************************
* The ternary Operator and Switch Statements
*/

/*

var firstName = 'John';
var age = 20;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement

var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName  + ' teaches kids.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' designs websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/*************************
* Trusthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', Nan
// truthy values: all NOT falsy values

var height = 23;

if (height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}

/* Coding challenge 2
*/
/*

var johnTeam = 89 + 89 + 89;
var mikeTeam = 89 + 89 + 89;

var johnAverage = johnTeam / 3;
var mikeAverage = mikeTeam / 3;

var biggest = johnAverage;
var name;

switch (true) {
    case johnAverage === mikeAverage:
        name = 'John and Mike'
        console.log('Draw ' + name);
        break;
    case johnAverage > mikeAverage:
        name = 'John';
        console.log(name + ' wins');
        break;
    default:
        name = 'Mike'
        biggest = mikeAverage;
        console.log(name + ' wins');
}

var maryTeam = 89 + 89 + 89;
var maryAverage = maryTeam / 3;

switch (true) {
    case maryAverage === biggest:
        console.log('Draw Mary, ' + name);
        break;
    case maryAverage > biggest:
        console.log('Marry wins');
        break;
    default:
        console.log(name + ' wins');
}

/*************************
* Functions
*/
/*
function calculateAge (birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearsUntillRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years');
}

yearsUntillRetirement(1990, 'John');

/*************************
* Function Statements and Expressions
*/
/*
//Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids.';
        case 'driver':
            return firstName + ' drives an uber.';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' does something else.'
    }
}

console.log (whatDoYouDo('teacher', 'John'));
console.log (whatDoYouDo('designer', 'Jane'));
console.log (whatDoYouDo('retired', 'Mark'));

/*************************
* Arrays
*/
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 169, 1948);

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Marry';
console.log(names);


var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.')
console.log(john);

john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1990));

john.indexOf('designer') === -1 ? console.log('John is NOT a designer') : console.log('John IS a designer');


/* Coding challenge 2 */
/*
var bills = [124, 48, 268];
var tips = [];
var total = [];

function tip (bill) {
    if (bill < 50) {
        // console.log(bill * 0.2);
        return bill * 0.2;
    }
    else if (bill <= 200) {
        // console.log(bill * 0.15);
        return bill * 0.15;
    }
    else {
        // console.log(bill * 0.1);
        return bill * 0.1;
    }
    
}
console.log(tip(10));
tips[0] = tip(bills[0]);
total[0] = bills[0] + tips[0];
tips[1] = tip(bills[1]);
total[1] = bills[1] + tips[1];
tips[2] = tip(bills[2]);
total[2] = bills[2] + tips[2];

// for (bill in bills) {
//     tips.unshift(tip(bills[bill]));
//     total.unshift(tip(bills[bill]) + bills[bill]);
// }

console.log(tips);
console.log(total);

/*********************
 * Objects and Properties
 */
/*
 var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false 
 };
 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/*********************
 * Objects and Methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false ,
    calculateAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calculateAge();

/*************************
 * CODING CHALLENGE 4
*/
/*

var mark = { 
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calculateBMI: function() {
        this.bmi = this.mass/ (this.height * this.height);
    }
}

var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calculateBMI: function() {
        this.bmi = this.mass/ (this.height * this.height);
    }
}

if (mark.calculateBMI() > john.calculateBMI()) {
    console.log(mark.fullName + ' has higher BMI with ' + mark.bmi);
}
else if (mark.bmi < john.bmi) {
    console.log(john.fullName + ' has higher BMI with ' + john.bmi);
}
else {
    console.log(john.fullName + ' and ' + mark.fullName  +
    ' have equal BMI with ' + john.bmi);
}


/*************************
 * Loops and Iterations
*/

// for (var i = 0; i < 10; i++ ) {
//     console.log(i);
// };

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// };
// i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
/*
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for (var i = john.length; i > 0; i--) {
    console.log(john[i-1]);
}

/*************************
 * CODING CHALLENGE 5
*/

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    total: [],
    tipCalc: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * .2;
            }
            else if (this.bills[i] <= 200) {
                this.tips[i] = this.bills[i] * .15;
            }
            else {
                this.tips[i] = this.bills[i] * .1;
            }
            this.total[i] = this.bills[i] + this.tips[i];
        }
    }
}

var mark = {
    bills: [77, 5, 110, 45],
    tips: [],
    total: [],
    tipCalc: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips[i] = this.bills[i] * .2;
            }
            else if (this.bills[i] <= 300) {
                this.tips[i] = this.bills[i] * .1;
            }
            else {
                this.tips[i] = this.bills[i] * .25;
            }
            this.total[i] = this.bills[i] + this.tips[i];
        }
    }
}

john.tipCalc();
mark.tipCalc();
console.log(john.tips, john.total, mark.tips, mark.total);

function calcAverage (name) {
    var total = 0;
    for (var i = 0; i < name.tips.length; i++) {
        total = total + name.tips[i];
    }
    return total / name.tips.length;
} 

if (calcAverage(john) > calcAverage(mark)) {
    console.log('John spent more in average with ' + calcAverage(john));
}
else if (calcAverage(john) < calcAverage(mark)) {
    console.log('Mark spent more in average with ' + calcAverage(mark));
}
else {
    console.log('They spent equal in average with ' + calcAverage(mark));
}
