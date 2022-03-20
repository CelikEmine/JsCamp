import BaseValidator from "../crossCuttingConcerns/validation/baseValidator.js";
import { users } from "../data/data.js";
import BaseRepository from "../repositories/baseRepository.js";
import UserRepository from "../repositories/userRepository.js";

export default class UserService {


    constructor(baseRepository, baseValidator) {

        this.baseRepository = baseRepository;
        this.baseValidator = baseValidator;
        this.users = [];
    }


    getAll() {
        return this.baseRepository.getAll();
    }

    add(user) {
        //this.baseValidator=new BaseValidator();
        if (this.baseValidator.emptyFieldsCheck(user)) {
            this.baseRepository.add(user);
            console.log("ekleme başarılı");
        }
        else {
            console.log("ekleme başarısız");
        }

    }


}