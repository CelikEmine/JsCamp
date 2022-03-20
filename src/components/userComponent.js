import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";
import Customer from "../models/customer.js";



console.log("user component yüklendi");

let logger1=new ElasticLogger();
let userService=new UserService(logger1);



userService.load();
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);

console.log("-------------------------------------");

let user1=new Customer(1,"emine","çelik","muğla","asdas","12345");
user1.type="customer";
let user2=new Customer(2,"fatmanur","çelik","antakya",24,"1235");
user2.type="customer";

userService.add(user1);
userService.add(user2);

console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);

userService.listCustomers().forEach(customer => {
    console.log(customer);
});

console.log(userService.getCustomersSorted());


