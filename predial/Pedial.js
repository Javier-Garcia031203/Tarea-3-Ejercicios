import Zone from './Zone.js';
import Person from './person.js';
import Property from './Property.js';
import Tax from './Tax.js';


let person = new Person();
person.fullName="Ambrosio Cardoso Jimenez";
person.dateOfBirth = new Date("1974/12/07");

let zoneUrban = new Zone("URB","URBANA",15.00);
let zoneRes= new Zone("RES","RESIDENCIAL",50.00)

let property1 =  new Property(person,zoneUrban,5000.00);
let property2 =  new Property(person,zoneRes,2000.00);

let tax = new Tax();
tax.dateOfPayment = new Date();
tax.owner=person
tax.properties= [property1, property2];
console.log(tax.total())