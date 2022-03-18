export default class UserService{


    constructor(loggerService){
        this.users=[];
        this.loggerService=loggerService;
    }

    add(user){
        this.loggerService.log(user);
        this.users.push(user);
    }

    list(){
       return this.users
    }

    getByİd(id){
        return this.users.find(user=>user.id===id);
    }

}