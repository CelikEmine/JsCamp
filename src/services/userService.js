import { users } from "../data/data.js";
import DataError from "../models/dataError.js";

export default class UserService{


    constructor(loggerService){
        
        this.employees=[];
        this.customers=[];
        this.errors=[];

        this.loggerService=loggerService;
    }

    load(){
        users.forEach(user => {
            
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user);
                    }
                    break;
                
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employees.push(user);
                    }
                    break;
    
                default:
                    this.errors.push(new DataError("wrong user type!!",user));
                    break;
            }

        });
    }

    checkCustomerValidityForErrors(user){
        let requiredFields="id firstName lastName age city".split(" ");
        let hasErrors=false;

            requiredFields.forEach(field => {
                    if(!user[field]){
                        hasErrors=true;
                        this.errors.push(new DataError(`validation problem.. ${field} is required`,user));

                    }
            });


            if(Number.isNaN(Number.parseInt(user.age))){
                this.errors.push(new DataError(`validation problem.. ${user.age} is not a number `,user));
                hasErrors=true;
            }


            return hasErrors;
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields="id firstName lastName age city salary".split(" ");
        let hasErrors=false;

            requiredFields.forEach(field => {
                    if(!user[field]){
                        hasErrors=true;
                        this.errors.push(new DataError(`validation problem.. ${field} is required`,user));

                    }
            });

            if(Number.isNaN(Number.parseInt(user.age))){
                this.errors.push(new DataError(`validation problem.. ${user.age} is not a number `,user));
                hasErrors=true;
            }

            return hasErrors;
    }

    

    add(user){

        switch (user.type) {
            case "customer":
                if(!this.checkCustomerValidityForErrors(user)){
                    this.customers.push(user);
                }
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                    this.employees.push(user);
                }
                break;
            default:
                this.errors.push(new DataError("this user can not be added. wrong user type ",user));

                break;
        }

        this.loggerService.log(user);
        //this.users.push(user);
    }

    listCustomers(){
       return this.customers;
    }

    listEmployees(){
        return this.employees;
     }

    getByİd(id){
        return this.users.find(user=>user.id===id);
    }

    getCustomersSorted(){
       return  this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return -1;
            }
            else if(customer1.firstName===customer2.firstName){
                return 0;
            }
            else{
                return 1;
            }
        })
    }

}