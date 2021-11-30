interface User {
  name : string;
  id : number
}

class UserAcccount{
    name : string ; 
    id : number
    constructor(name : string, id : number){
        this.name = name;
        this.id = id
    }
}
const user : User  = new UserAcccount("Shubh", 7);
console.log(user.name);
console.log(user.id);

