
import UserService from "./userService.js";

export default class CustomerService extends UserService{

    constructor(userRepository){
       super(userRepository);
    }


}