import UserService from "./userService.js";

export default class EmployeeService extends UserService{

    constructor(userRepository){
       super(userRepository);
    }


}