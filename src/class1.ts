class Stark{    
    firstname : string | undefined; // field
    sayHi? : string; // field
    static castle : string = "Winterfell"; // field
    private _age: number | undefined; // property
    private _length = 0; // property
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
    get age() {
        return this._age;
    }   

     // constructor
    constructor(){
        this.firstname = "Shubhangi";        
    }

    // function
    hello(person : string) : string{
        console.log(`Hello ${person}`);
        return person;
    }
}

var ned = new Stark();
ned.hello("Yogesh");
ned.sayHi = "winter is comming";