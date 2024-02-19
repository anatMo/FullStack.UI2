import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {

  employees: Employee[] = [
    // {
    //   id: '1',
    //   name: 'A',
    //   email:'a@A.com',
    //   phone: 1111,
    //   salary:100,
    //   department:'a1'
    // },
    // {
    //   id: '2',
    //   name: 'B',
    //   email:'b@B.com',
    //   phone: 2222,
    //   salary:200,
    //   department:'B1'
    // },
    // {
    //   id: '3',
    //   name: 'c',
    //   email:'c@C.com',
    //   phone: 3333,
    //   salary:300,
    //   department:'c1'
    // }
  ];
  constructor() {}

  ngOnInit(): void {

    
  }

}
