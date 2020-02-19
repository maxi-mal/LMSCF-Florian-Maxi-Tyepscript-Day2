

class mainclass{
	brand: string;
	names: string;
	year: number;
	cost: number;

	constructor( a:string, b:string, c:number, d:number) {
		this.brand = a;
		this.names = b;
		this.year = c;
		this.cost = d;

	}

	printmain(){
		return `
			<table class="table">
			    <thead>
			      <tr class="text-white">
			        <th>brand</th>
			        <th>names</th>
			        <th>year</th>
			        <th>cost</th>
			        
			      </tr>
			    </thead>
			    <tbody>
			      <tr class= "text-white">
			        <td>${this.brand}</td>
			        <td>${this.names}</td>
			        <td>ab${this.year}</td>
			        <td>${this.cost}$</td>
			      </tr>
			     
			    </tbody>
  			</table>
		`
	}
}

let pleaseWork = new mainclass( "volkswagen", "Karmann-Giha", 1955, 12000);

console.log(pleaseWork.printmain());

document.getElementsByClassName("inputbox")[0].innerHTML = (pleaseWork.printmain());

let yesitworks = new mainclass("BMW", "Isetta", 1955, 15000);

// document.getElementsByClassName("inputboxtwo")[0].innerHTML = (yesitworks.printmain());

let itworks = new mainclass("Volkswagen", "Käfer", 1945, 8000);

document.getElementsByClassName("inputboxkaefer")[0].innerHTML = (itworks.printmain());

let works = new mainclass("DMC", "DeLorian", 1981, 27000);

document.getElementsByClassName("inputboxdelorian")[0].innerHTML = (works.printmain());



class motor extends mainclass{
	horsepower: number;
	max_speed: number;

	constructor(a,b,c,d,horsepower,max_speed) {
		super(a,b,c,d,);
		this.horsepower = horsepower;
		this.max_speed = max_speed;
	}
withmotor(){
	return super.printmain() + `
				<table class="table">
			    <thead>
			      <tr class="text-white">
			        <th>Horsepower</th>
			        <th>Max Speed</th>
			       </tr>
			    </thead>
			    <tbody>
			    	<tr class= "text-white">
			        <td>${this.horsepower}</td>
			        <td>${this.max_speed}km/h</td>
			    	</tr>
			     </tbody>
  			</table>
	`
}

}


let yes = new motor("BMW", "Isetta", 1955, 15000, 13, 85);

document.getElementsByClassName("inputboxtwo")[0].innerHTML = (yes.withmotor());

let yesone = new motor("volkswagen", "Karmann-Giha", 1955, 12000, 44, 120);

document.getElementsByClassName("inputbox")[0].innerHTML = (yesone.withmotor());