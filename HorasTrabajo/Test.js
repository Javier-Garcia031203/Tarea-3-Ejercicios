import Payroll from "./nomina.js";
import Employee from "./employee.js";

const employee_1 = new Employee(1,"Ambrosio Cardoso",1);
const employee_2 = new Employee(2,"Luis Angel",2);
const employee_3 = new Employee(3,"Ulises Isidro",3);


const payRolls = [new Payroll(employee_1,50),
    new Payroll(employee_2,60),
    new Payroll(employee_3,45),
    ];

payRolls.forEach(item=>{
    console.log(item.employee.name + " => " + item.getSalary());
})