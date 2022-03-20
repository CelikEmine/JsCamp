import { users } from "../data/data.js";

export default class BaseRepository {

    constructor(type) {
        this.users = users.filter(user => user.type === type);
    }




    // loadUsers(){

    //     users.forEach(user => {
    //         this.users.push(user);
    //     });
    // }

    getAll() {
        return this.users;
    }

    getByID(id) {
        return this.users.find(user => user.id === id);
    }

    add(model) {
        this.users.push(model);
    }

    update(model) {
        const modelIndex = this.users.findIndex(user => user.id === model.id);
        this.users[modelIndex] = model;
    }

    get(model){
        return this.users.find(user =>user === model);
    }


}