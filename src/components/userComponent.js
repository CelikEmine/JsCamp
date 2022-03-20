import BaseRepository from "../repositories/baseRepository.js";
import UserService from "../services/userService.js";
import Customer from "../models/customer.js";
import CustomerValidator from "../crossCuttingConcerns/validation/customerValidator.js";


let user1=new Customer(21,"hasan","kıran","hatay",20,"145454");
let userService=new UserService(new BaseRepository("customer"),new CustomerValidator());

userService.add(user1);
console.log(userService.getAll());




