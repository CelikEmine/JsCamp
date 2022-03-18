import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";


console.log("user component yüklendi");

let logger1=new ElasticLogger();
let userService=new UserService(logger1);


let user1=new User(1,"emine","çelik","muğla");
let user2=new User(2,"fatmanur","çelik","antakya");
let user3=new User(3,"hasan","çelik","konya");
let user4=new User(4,"nazan","çelik","antalya");
let user5=new User(5,"hatice","çelik","muğla");


userService.add(user1);
userService.add(user2);
userService.add(user3);
userService.add(user4);
userService.add(user5);

console.log(userService.list());
console.log(userService.getByİd(2));





