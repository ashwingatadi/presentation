import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  empList: Array<Employee>;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getEmpList();
  }

}
