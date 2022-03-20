import { users } from "../data/data.js";
import BaseRepository from "./baseRepository.js";

export default class UserRepository extends BaseRepository{

    constructor(){
        super();
        this.users=users;
    }

}