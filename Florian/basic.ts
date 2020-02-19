class Person{
	firstName: string;
	lastName: string;
	age: number;
	job: string;

constructor(a: string, b: string, c: number, d: string ) {
	this.firstName = a;
	this.lastName = b; 
	this.age = c;
	this.job = d;
}

printname(){
		return `My name is ${this.firstName} ${this.lastName} my age is ${this.age} and my job is ${this.job} `
}

deam(){
	return `hey ${this.printname()}`
}
}
let fullname = new Person("mario", "nelson", 30, "developer");

console.log(fullname.printname());

document.write(fullname.deam());







class VIP extends Person{
	salary: number;

	constructor(a,b,c,d,salary) {
		super(a,b,c,d);
		this.salary = salary;
	}

fullexercise(){
	return super.deam() +`with a salary of ${this.salary}.`
}
}

let morefullname = new VIP("flo","mustermann", 30, "developer", 5000);

document.write(morefullname.fullexercise());

