interface Task {
    name1: String | undefined; //property
    run(arg: any):void; //method

}
class MyTask  implements Task{
   name1 : string | undefined;
   run(arg : any) : void {
       console.log(`running ${this.name1}, arg ${arg}`);
   }
}

let myTask = new MyTask();
myTask.run("test");