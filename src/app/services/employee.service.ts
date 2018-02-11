import { Employee } from '../models/employee.model'
export class EmployeeService {
    emplList: Array<Employee>;

    getEmpList(): Array<Employee> {
        this.emplList = new Array<Employee>();
        this.emplList.push(
            new Employee(
                '100', 'Ashwin', 'Male', 'IT', new Date(2017, 8, 16), 4500));
        this.emplList.push(
            new Employee(
                '101', 'Sheetal', 'Female', 'IT', new Date(2015, 3, 14), 4800));
        this.emplList.push(
            new Employee(
                '102', 'Aditya', 'Male', 'Admin', new Date(2014, 5, 21), 4900));
        this.emplList.push(
            new Employee(
                '103', 'Shalini', 'Female', 'Finance', new Date(2016, 6, 26), 5200));
        this.emplList.push(
            new Employee(
                '104', 'Pradnya', 'Female', 'HR', new Date(2017, 5, 12), 4500));

        return this.emplList;
    }

}