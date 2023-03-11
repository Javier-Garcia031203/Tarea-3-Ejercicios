import {HOURLY_PRICE} from "./const.js";
import {category} from "./category.js";

export default class  Payroll {
    constructor (employee, hoursWorked ){
        this.employee = employee;
        this.hoursWorked = hoursWorked;
    }
    getSalary(){
        const overtime = this.hoursWorked - 40;
        let salary = HOURLY_PRICE * 40;
        let priceOvertime = 0;
        if (overtime>0){
            if (overtime<10)
                priceOvertime = HOURLY_PRICE * 1.50 ;
            else if (overtime>=10 && overtime<=20)
                priceOvertime = HOURLY_PRICE * 1.40 ;
            else
                priceOvertime = HOURLY_PRICE * 1.20 ;

            switch (this.employee.category){
                case 1: priceOvertime =  priceOvertime * category.A; break;
                case 2: priceOvertime =  priceOvertime * category.B; break;
                default: break;
            }
        }
        return salary + overtime * priceOvertime;
    }

}
