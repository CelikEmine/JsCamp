import DataError from "../../models/dataError.js";

export default class BaseValidator{

    constructor() {
        this.errors = [];
        this.requiredFields = ["id", "firstName", "lastName", "age", "city"];
      }


      emptyFieldsCheck(user) {

        this.ageIsNumberCheck(user);
        this.requiredFieldsCheck(user);

        if(this.errors.length!==0){
            console.log(this.errors);
            return false;
        }
        return true;
      }

      requiredFieldsCheck(user) {
        this.requiredFields.forEach((field) => {
          if (!user[field]) {
            this.errors.push(new DataError("required field error ",user));
            
          }
        });
      }
    
      ageIsNumberCheck(user) {
        if (!Number.isInteger(user.age)) {
            this.errors.push(new DataError("age is not number ",user));
        }
      }
    


}