

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
			      <tr>
			        <th>brand</th>
			        <th>names</th>
			        <th>year</th>
			        <th>cost</th>
			        
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td>${this.brand}</td>
			        <td>${this.names}</td>
			        <td>${this.year}</td>
			        <td>${this.cost}$</td>
			      </tr>
			     
			    </tbody>
  			</table>
		`
	}
}

let pleaseWork = new mainclass( "volkswagen", "Karmann-Giha", 1955, 1200);

console.log(pleaseWork.printmain());

document.getElementById("inputbox").innerHTML = (pleaseWork.printmain());