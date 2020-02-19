// <Basic 1:

// // Create a class constructor named Person that should hold information about name, age,  jobTitle and have 
// a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)” 
// //  -->

class Person {
	name = "Maxi";
	age = 34;
	jobtitle = "coder";
	constructor(name, age, jobtitle) {
		this.name = name;
		this.age = age;
		this.jobtitle = jobtitle;
	}
	whoami() {
		return `My name is ${this.name} and I am ${this.age} years old and a ${this.jobtitle}`;
	}

	hi() {
		return `Hi ${this.name}`

	}
}
	let newperson = new Person("Maxi", 34, "coder");
	document.write(newperson.whoami());

// Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

let secondperson = new Person("Serri", 30, "coder");
console.log(secondperson.jobtitle);

console.log(secondperson.hi());

class addattr extends Person {
	salary: number;
	joblocation: string;
	
	constructor (name, age, jobtitle, salary, joblocation) {
		super(name, age, jobtitle);
		this.salary = salary;
		this.joblocation = joblocation;
	}

		whodis(){
			return `<br>${super.whoami()} - I get ${this.salary} every month and I work in ${this.joblocation}.`;
	}
}

let me = new addattr("Maxi", 34, "coder", 3000, "Vienna");
document.write(me.whodis());
