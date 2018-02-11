export class Employee{
   
    constructor(
       private id: string,
       private name: string,
       private gender: string,
       private department: string,
       private doj: Date,
       private salary: number)
    {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.department = department;
        this.doj = doj;
        this.salary = salary;
    }
}